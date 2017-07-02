package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Cliente extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    @Constraints.Required
    public long cpf;

    @Column(unique = true)
    public String telefone;

    public String endereco;
    
    public String bairro;

    public String cidade;

    public String referencia;

    public static Finder<Long, Cliente> find = new Finder<Long,Cliente>(Cliente.class);

}