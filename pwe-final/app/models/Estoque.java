package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Estoque extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    public int quantidade;

    public Produto produto;


    public static Finder<Long, Estoque> find = new Finder<Long,Estoque>(Estoque.class);
}