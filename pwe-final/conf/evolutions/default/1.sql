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

create table estoque (
  id                            bigint auto_increment not null,
  quantidade                    integer,
  constraint pk_estoque primary key (id)
);

create table funcionario (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  senha                         varchar(255),
  constraint pk_funcionario primary key (id)
);

create table pedido (
  id                            bigint auto_increment not null,
  cliente_id                    bigint,
  mesa                          integer,
  datahora                      datetime(6),
  constraint pk_pedido primary key (id)
);

create table pedido_produto (
  id                            bigint auto_increment not null,
  pedido_id                     bigint not null,
  quantidade                    integer,
  produto_id                    bigint,
  constraint pk_pedido_produto primary key (id)
);

create table permissao (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  constraint pk_permissao primary key (id)
);

create table produto (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  descricao                     varchar(255),
  preco                         float,
  constraint pk_produto primary key (id)
);

create table status_pedido (
  id                            bigint auto_increment not null,
  nome                          varchar(255),
  constraint pk_status_pedido primary key (id)
);

alter table pedido add constraint fk_pedido_cliente_id foreign key (cliente_id) references cliente (id) on delete restrict on update restrict;
create index ix_pedido_cliente_id on pedido (cliente_id);

alter table pedido_produto add constraint fk_pedido_produto_pedido_id foreign key (pedido_id) references pedido (id) on delete restrict on update restrict;
create index ix_pedido_produto_pedido_id on pedido_produto (pedido_id);

alter table pedido_produto add constraint fk_pedido_produto_produto_id foreign key (produto_id) references produto (id) on delete restrict on update restrict;
create index ix_pedido_produto_produto_id on pedido_produto (produto_id);


# --- !Downs

alter table pedido drop foreign key fk_pedido_cliente_id;
drop index ix_pedido_cliente_id on pedido;

alter table pedido_produto drop foreign key fk_pedido_produto_pedido_id;
drop index ix_pedido_produto_pedido_id on pedido_produto;

alter table pedido_produto drop foreign key fk_pedido_produto_produto_id;
drop index ix_pedido_produto_produto_id on pedido_produto;

drop table if exists cliente;

drop table if exists estoque;

drop table if exists funcionario;

drop table if exists pedido;

drop table if exists pedido_produto;

drop table if exists permissao;

drop table if exists produto;

drop table if exists status_pedido;

