import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../novo-cliente/cliente.service';
@Component({
  selector: 'app-centraladmin',
  templateUrl: './centraladmin.component.html',
  styleUrls: ['./centraladmin.component.css']
})
export class CentraladminComponent implements OnInit {
clientFilter="";
tab=0;
constructor(private clienteService:ClienteService) { }
  // clientes=[
  // {nome:"Fulano", cpf:"999.999.999-99", endereco:"Rua j, n1", bairro:"Capiroto", cidade:"dedeux",referencia:"perto da esquina doce"}
  // ,{nome:"Fulano", cpf:"999.999.999-99", endereco:"Rua j, n1", bairro:"Capiroto", cidade:"dedeux",referencia:"perto da esquina doce"}
  // ];
  clientes=null;
  ngOnInit() {
  	this.clienteService.listarClientes()
  					   .subscribe((data)=>{this.clientes=data});
  }

}
