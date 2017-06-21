package controllers;

import play.mvc.*;
import models.*;

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
        Permissao p = new Permissao();
        p.nome="Garçom";
        p.save();
        
        Funcionario f = new Funcionario();
        f.nome = "Garçom";
        f.permissao = p;
        f.save();

        StatusPedido s = new StatusPedido();
        s.nome = "Aberto";
        s.save();

        Produto prod = new Produto();
        prod.nome = "pizza de muçarela";
        prod.descricao = "muçarela";
        prod.preco = 10;
        prod.save();

        PedidoProduto pp = new PedidoProduto();
        pp.quantidade = 2;
        pp.produto = prod;

        Pedido ped = new Pedido();
        ped.mesa = 1;
        ped.funcionario = f;
        ped.datahora = new Date();
        ped.status = s;
        ped.itens.add(pp);
        ped.save();
        System.out.println(ped);


        return ok(views.html.index.render());
    }

}
