import { Component, OnInit, Input, Output } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
	selector: 'lista-pedido',
	templateUrl: './lista-pedido.component.html',
	styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit
{
	model;
	@Input() type;

	constructor(private pedidoService: PedidoService) 
	{ 
		
	}

	pronto(pedido)
	{
		this.pedidoService.atualizaPedido(pedido)
						  .subscribe((data)=>{this.pedidoService.update();});
	}
	ngOnInit() { 
		this.pedidoService.getPedidos(this.type).subscribe((data)=>{console.log(data);this.model=data;});
	}
	
	getClass(id)
	{
		return ['alert-warning','alert-success','alert-danger','alert-info'][id];
	}
	
	entregar(pedido)
	{
		this.pronto(pedido);
	}

	fecharConta(pedido)
	{
		this.pronto(pedido);
	}
}
