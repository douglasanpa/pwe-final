package controllers;

import play.mvc.*;
import models.*;

import java.util.*;
import java.util.Date;
import java.text.DateFormat;

import play.data.DynamicForm;   //Para pegar GET/POST
import play.data.Form;          //Para pegar GET/POST

import java.security.*;
import java.text.*;



/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class Login extends Controller {

    public Result login() {
        DynamicForm dynamicForm = Form.form().bindFromRequest();
        String nome = dynamicForm.get("usuario");
        String senha = dynamicForm.get("senha");
        Funcionario f = Funcionario.find.where()
            .eq("nome", nome)
            .eq("senha", senha)
            .findUnique();
        if (f==null) {
            response().discardCookie("user");
            return status(401,"Login inválido");    
        }else{
            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
            String formattedDate = sdf.format(date);
            String hash = this.MD5(formattedDate);
            f.hash = hash;
            f.save();
            response().setCookie("user", hash, 3600);
            return ok("OK");
        }
    }

    public Result estaLogado() {
        String hash = response().getCookie("user");
        
        Funcionario f = Funcionario.find.where()
            .eq("nome", nome)
            .eq("senha", senha)
            .findUnique();
        if (f==null) {
            response().discardCookie("user");
            return status(401,"Login inválido");    
        }else{
            Date date = new Date();
            SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
            String formattedDate = sdf.format(date);
            String hash = this.MD5(formattedDate);
            f.hash = hash;
            f.save();
            response().setCookie("user", hash, 3600);
            return ok("OK");
        }
        
 
    }

    public String MD5(String md5) {
   try {
        java.security.MessageDigest md = java.security.MessageDigest.getInstance("MD5");
        byte[] array = md.digest(md5.getBytes());
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < array.length; ++i) {
          sb.append(Integer.toHexString((array[i] & 0xFF) | 0x100).substring(1,3));
       }
        return sb.toString();
    } catch (java.security.NoSuchAlgorithmException e) {
    }
    return null;
}

}