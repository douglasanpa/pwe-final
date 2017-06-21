package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Permissao extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    public static Finder<Long, Permissao> find = new Finder<Long,Permissao>(Permissao.class);

}