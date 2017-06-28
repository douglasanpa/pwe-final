package models;

import javax.persistence.*;

import com.avaje.ebean.Model;
import play.data.validation.*;

import models.*;

import com.fasterxml.jackson.annotation.*;

@Entity
public class Funcionario extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;

    @Constraints.Required
    public String nome;

    @ManyToOne
    @Constraints.Required
    public Permissao permissao;

    @JsonIgnore
    @Constraints.Required
    public String senha;

    @JsonIgnore
    public String hash;    

    public static Finder<Long, Funcionario> find = new Finder<Long,Funcionario>(Funcionario.class);

}