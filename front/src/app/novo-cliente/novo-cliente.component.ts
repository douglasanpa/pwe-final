import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
@Component({
  selector: 'novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {
	clientModel = { nome:"",
                  telefone:"",
                  cpf:"",
                  endereco:"",
                  referencia:"",
                  bairro:"",
                  cidade:""
                };
	showForm=false;
	
	constructor(private clienteService:ClienteService) { }
	
	ngOnInit() {}
	
	register(model) 
	{
    this.showForm=false;
		this.clienteService.adicionar(model).subscribe((data)=>console.log(data)); 
	}
  
  

	
}
