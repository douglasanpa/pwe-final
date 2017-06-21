package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

@Entity
public class Funcionario extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    @Constraints.Required
    public Permissao permissao;

    @Constraints.Required
    public String senha;

    public static Finder<Long, Funcionario> find = new Finder<Long,Funcionario>(Funcionario.class);

}