package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Pedido extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;
    
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    public Cliente cliente;

    public static Finder<Long, Pedido> find = new Finder<Long,Pedido>(Pedido.class);
}