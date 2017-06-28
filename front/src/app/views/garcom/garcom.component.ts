import { Component, OnInit } from '@angular/core';
import { ListaPedidoComponent, NovoPedidoComponent, PedidoService, IniciaNovoPedidoComponent }from '../../pedido';

@Component({
	templateUrl: './garcom.component.html',
	styleUrls: ['./garcom.component.css']
})

export class GarcomComponent implements OnInit {
	mesa='';
	pedidos;
	novo=false;
	constructor(private pedidoService:PedidoService) 
	{ 
		
	}
	
	ngOnInit() 
	{
	}
	
	novoPedido(mesa)
	{
		this.novo=true;
	}

	adicionarPedido(pedido)
	{
		console.log(pedido);
		this.pedidoService.adicionarPedido(pedido).subscribe();
		this.mesa="";
		this.novo=false;
	}
}
