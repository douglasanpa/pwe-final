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
		this.pedidoService.getPedidos().subscribe((data)=>{console.log(data);this.model=data;});
	}

	pronto(pedido)
	{
		this.pedidoService.atualizaPedido(pedido);
	}
	ngOnInit() { }
	getClass(id)
	{
		return ['alert-warning','alert-success','alert-danger','alert-info'][id];
	}
	entregar()
	{

	}
	fecharConta()
	{

	}
}
