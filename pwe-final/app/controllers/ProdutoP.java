package controllers;

import play.mvc.*;
import models.*;

import java.util.*;
import java.util.Date;
import java.text.DateFormat;

import play.libs.Json;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class ProdutoP extends Controller {

    public Result estoque() {
        List<Estoque> prods = Estoque.find
            .where()
            .gt("quantidade",0)
            .findList();

        return ok(Json.toJson(prods));
    }

    public Result all() {
        List<Estoque> prods = Estoque.find
            .all();

        return ok(Json.toJson(prods));
    }


}