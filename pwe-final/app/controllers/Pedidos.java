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

    //listar todos os Pedidos
    //visualizar pedidos cozinha
    //cozinha mudar status para pronto para entrega
    //adicionar pedidos do garçom
    //adicionar pedidos da central
    //garcom fechar conta para central
    //central emitir nota fiscal
    

    public Result estoque() {
        List<Produto> prods = Produto.find
            .where()
            .gt("estoque", 0)
            .findList();

        return ok(Json.toJson(prods));
    }

    public Result salvar() {
        return ok();
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


}