package models;

import javax.persistence.*;

import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Pedido extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;
    
    @ManyToOne
    public Cliente cliente;

    public int mesa;

    @Constraints.Required
    public Funcionario funcionario;

    @Constraints.Required
    public Date datahora;
    
    @ManyToOne
    @Constraints.Required
    public StatusPedido status;

    public double valortotal;

    @OneToMany(targetEntity = PedidoProduto.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    public List<PedidoProduto> itens;

    public static Finder<Long, Pedido> find = new Finder<Long,Pedido>(Pedido.class);
}