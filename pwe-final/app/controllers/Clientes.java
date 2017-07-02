package controllers;

import play.mvc.*;
import models.*;

import java.util.*;
import java.util.Date;
import java.text.DateFormat;

import play.data.DynamicForm;   //Para pegar GET/POST
import play.data.Form;          //Para pegar GET/POST

import play.libs.Json;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Clientes extends Controller {

    public Result busca() {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        String telefone = dynamicForm.get("telefone");
        Cliente cliente = Cliente.find
            .where()
            .eq("telefone", telefone)
            .findUnique();

        return ok(Json.toJson(cliente));
    }

    public Result all() {
        
        List <Cliente> clientes = Cliente.find
            .all();

        return ok(Json.toJson(clientes));
    }

    public Result salvar() {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        String nome = dynamicForm.get("nome");
        String telefone = dynamicForm.get("telefone");
        String cpf = dynamicForm.get("cpf");
        String endereco = dynamicForm.get("endereco");
        String bairro = dynamicForm.get("bairro");
        String cidade = dynamicForm.get("cidade");
        String referencia = dynamicForm.get("referencia");
        Cliente c = new Cliente();
        c.nome = nome;
        c.cpf = Long.valueOf(cpf);
        c.telefone = telefone;
        c.endereco = endereco;
        c.bairro = bairro;
        c.cidade = cidade;
        c.referencia = referencia;
        c.save();

        return ok(Json.toJson(c));
    }


}