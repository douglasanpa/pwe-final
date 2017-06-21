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

    @Constraints.Required
    public int quantidade;

    @Constraints.Required
    @ManyToOne
    public Produto produto;

    public static Finder<Long, Estoque> find = new Finder<Long,Estoque>(Estoque.class);
}