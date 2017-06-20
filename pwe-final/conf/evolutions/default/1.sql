# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table cliente (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  cpf                           bigint,
  endereco                      varchar(255),
  bairro                        varchar(255),
  cidade                        varchar(255),
  referencia                    varchar(255),
  constraint pk_cliente primary key (id)
);

create table pedido (
  id                            bigint auto_increment not null,
  cliente_id                    bigint,
  constraint pk_pedido primary key (id)
);

alter table pedido add constraint fk_pedido_cliente_id foreign key (cliente_id) references cliente (id) on delete restrict on update restrict;
create index ix_pedido_cliente_id on pedido (cliente_id);


# --- !Downs

alter table pedido drop foreign key fk_pedido_cliente_id;
drop index ix_pedido_cliente_id on pedido;

drop table if exists cliente;

drop table if exists pedido;

