package controllers;

import play.mvc.*;
import models.*;

import java.util.*;
import java.util.Date;
import java.text.DateFormat;


/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {

        Permissao pp = Permissao.find.where()
            .eq("nome", "garcom")
            .findUnique();
        Permissao p = new Permissao();
        if(pp==null){
            
            p.nome="garcom";
            p.save();
        }
        
        Permissao pp2 = Permissao.find.where()
            .eq("nome", "central")
            .findUnique();
        Permissao p2 = new Permissao();
        if(pp2==null){   
            p2.nome="central";
            p2.save();
        }

        Permissao pp3 = Permissao.find.where()
            .eq("nome", "cozinha")
            .findUnique();
        Permissao p3 = new Permissao();
        if(pp3==null){
            p3.nome="cozinha";
            p3.save();
        }
        
        Funcionario ff = Funcionario.find.where()
            .eq("nome", "douglas")
            .findUnique();
        Funcionario f = new Funcionario();
        if(ff==null){
            f.nome = "douglas";
            f.senha = "qwe123";
            f.permissao = p;
            f.save();
        }

        Funcionario ff2 = Funcionario.find.where()
            .eq("nome", "leandro")
            .findUnique();
        Funcionario f2 = new Funcionario();
        if(ff2==null){
            f2.nome = "leandro";
            f2.senha = "qwe123";
            f2.permissao = p2;
            f2.save();
        }
        Funcionario ff3 = Funcionario.find.where()
            .eq("nome", "giovani")
            .findUnique();
        Funcionario f3 = new Funcionario();
        if(ff3==null){
            f3.nome = "giovani";
            f3.senha = "qwe123";
            f3.permissao = p3;
            f3.save();
        }
        
        StatusPedido ss = StatusPedido.find.where()
            .eq("nome", "Enviado para Cozinha")
            .findUnique();
        StatusPedido s = new StatusPedido();
        if(ss==null){
            s.nome = "Enviado para Cozinha";
            s.save();
        }

        StatusPedido ss2 = StatusPedido.find.where()
            .eq("nome", "Pronto para entrega")
            .findUnique();
        StatusPedido s2 = new StatusPedido();
        if(ss2==null){
            s2.nome = "Pronto para entrega";
            s2.save();
        }

        StatusPedido ss3 = StatusPedido.find.where()
            .eq("nome", "Enviado para pagamento")
            .findUnique();
        StatusPedido s3 = new StatusPedido();
        if(ss3==null){
            s3.nome = "Enviado para pagamento";
            s3.save();
        }

        StatusPedido ss4 = StatusPedido.find.where()
            .eq("nome", "Concluido")
            .findUnique();
        StatusPedido s4 = new StatusPedido();
        if(ss4==null){
            s4.nome = "Concluido";
            s4.save();
        }

        Produto pr = Produto.find.where()
            .eq("nome", "pizza de muçarela")
            .findUnique();
        Produto prod = new Produto();
        PedidoProduto ppr = new PedidoProduto();
        Pedido ped = new Pedido();
        if(pr==null){
            prod.nome = "pizza de muçarela";
            prod.descricao = "muçarela";
            prod.preco = 10;
            prod.estoque = 10;
            prod.save();
            
            ppr.quantidade = 2;
            ppr.produto = prod;

            ped.mesa = 1;
            ped.funcionario = f;
            ped.datahora = new Date();
            ped.status = s;
            ped.itens.add(ppr);
            ped.save();
        }

        

        
        
        
        // Estoque e1 = new Estoque();
        // e1.quantidade = 0;
        // e1.produto = prod;
        // e1.save();
        

        return status(401,"UTILIZE O FRONT-END");
    }

}
