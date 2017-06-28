package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

import com.fasterxml.jackson.annotation.*;

@Entity
public class Produto extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;
    
    @JsonIgnore
    public String descricao;

    @Constraints.Required
    public float preco;

    @Constraints.Required
    public int estoque;

    public static Finder<Long, Produto> find = new Finder<Long,Produto>(Produto.class);

}