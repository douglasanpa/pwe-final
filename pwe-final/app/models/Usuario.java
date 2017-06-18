package models;

import com.avaje.ebean.Model;
import models.*;
import javax.persistence.*;
import play.data.validation.*;


@Entity
public class Usuario extends Model {
    @Id
    @Constraints.Min(10)
    public Long id;
    @Constraints.Required
    public String nome;
}