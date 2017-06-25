import { Component, OnInit } from '@angular/core';
import * as Pedido from '../';

@Component({
	selector: 'pedido-list',
	templateUrl: './pedido-list.component.html',
	styleUrls: ['./pedido-list.component.css']
})
	
export class PedidoListComponent implements OnInit {
	pedidos = [];
	constructor(private pedidoService: Pedido.PedidoService) { }

	ngOnInit() {
		this.pedidos = this.pedidoService.getPedidos();
	}

}
