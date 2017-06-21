package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class StatusPedido extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    public static Finder<Long, StatusPedido> find = new Finder<Long,StatusPedido>(StatusPedido.class);

}