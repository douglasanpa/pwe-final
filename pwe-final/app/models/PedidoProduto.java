package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class PedidoProduto extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    public int quantidade;
    
    @ManyToOne
    public Produto produto;


    public static Finder<Long, PedidoProduto> find = new Finder<Long,PedidoProduto>(PedidoProduto.class);
}