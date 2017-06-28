import { Component, OnInit } from '@angular/core';
import { ListaPedidoComponent,NovoPedidoComponent, PedidoService }from '../../pedido';


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
		this.atualizarPedidos();
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
		this.pedidoService.adicionarPedido(pedido).subscribe((data)=>this.atualizarPedidos());
		this.mesa="";
		this.novo=false;
	}
	atualizarPedidos()
	{
		this.pedidoService.getPedidos().subscribe((data)=>this.pedidos=data);
	}

}
