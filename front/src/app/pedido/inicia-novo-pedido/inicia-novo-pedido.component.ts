import { Component, OnInit } from '@angular/core';
import { ListaPedidoComponent, NovoPedidoComponent, PedidoService }from '../../pedido';
@Component({
  selector: 'inicia-novo-pedido',
  templateUrl: './inicia-novo-pedido.component.html',
  styleUrls: ['./inicia-novo-pedido.component.css']
})
export class IniciaNovoPedidoComponent implements OnInit {
	mesa='';
	pedidos;
	novo=false;
	constructor(private pedidoService:PedidoService) {}
	
	ngOnInit() {}
	
	novoPedido(mesa)
	{
		this.novo=true;
	}

	adicionarPedido(pedido)
	{
		this.pedidoService.adicionarPedido(pedido).subscribe((data)=>{this.pedidoService.update();});
		this.mesa="";
		this.novo=false;
	}

}
