package controllers;

import play.mvc.*;
import models.*;

import java.util.*;
import java.util.Date;
import java.text.DateFormat;

import play.libs.Json;
import com.fasterxml.jackson.databind.JsonNode; 

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Pedidos extends Controller {

    //central emitir nota fiscal
    

    public Result estoque() {
        List<Produto> prods = Produto.find
            .where()
            .gt("estoque", 0)
            .findList();

        return ok(Json.toJson(prods));
    }

    public Result salvar() {
        try {
            JsonNode json = request().body().asJson();
            StatusPedido s = StatusPedido.find.where()
            .eq("id", 1L)
            .findUnique();
            Pedido ped = new Pedido();
            ped.mesa = json.get("mesa").asInt();
            ped.datahora = new Date();
            ped.status = s;
            
            for ( JsonNode json2 : json.get("items")) {
                Produto prod = Produto.find
                    .where()
                    .eq("id", json2.get("item").get("id").asText())
                    .findUnique();
                PedidoProduto ppr = new PedidoProduto();
                ppr.quantidade = json2.get("quantidade").asInt();
                ppr.produto = prod;
                ped.itens.add(ppr);
                prod.estoque = prod.estoque - json2.get("quantidade").asInt();
                prod.save();
            }
            
            
            ped.save();
            return ok("Pedido atualizado");
        } catch (Exception e) {
            return status(400,"Pedido não foi inserido");
        }
    }
    
    public Result atualiza() {
        try {
            JsonNode json = request().body().asJson();
        Pedido p = Pedido.find
            .where()
            .eq("id", json.get("id").asText())
            .findUnique();
        StatusPedido st = StatusPedido.find
            .where()
            .eq("id", p.status.id+1)
            .findUnique();
            p.status = st;
            p.save();
            return ok("Pedido atualizado");
        } catch (Exception e) {
            return status(400,"Pedido não foi atualizado");
        }
    }

    public Result all() {
        Login l = new Login();
        StatusPedido st = StatusPedido.find.where()
            .eq("nome", "Concluido")
            .findUnique();
        if(l.isLogged()){
            List<Pedido> peds = Pedido.find
            .where()
            .ne("status", st)
            .findList();

        return ok(Json.toJson(peds));
        }else{
            return status(401,"Login inválido");
        }
        
    }

    public Result busca(String tipo) {
        if(tipo.equals("cozinha")){
            StatusPedido st = StatusPedido.find.where()
            .eq("id", "1")
            .findUnique();
            List<Pedido> peds = Pedido.find
            .where()
            .eq("status", st)
            .findList();
            return ok(Json.toJson(peds));
        }else if(tipo.equals("garcon")){
            StatusPedido st = StatusPedido.find.where()
            .eq("id", "4")
            .findUnique();
            List<Pedido> peds = Pedido.find
            .where()
            .ne("status", st)
            .findList();
            return ok(Json.toJson(peds));
        }
        
        return status(400,"Requisição inválida");
    }


}