import { Component, OnInit } from '@angular/core';
import { PedidoEditorComponent, PedidoService } from '../../pedido';


@Component({
	templateUrl: './garcom.component.html',
	styleUrls: ['./garcom.component.css']
})
export class GarcomComponent implements OnInit {
	formmodel = { mesa: "" };
	mesa = "";
	editingPedido = false;
	pedidos = [];
	constructor() { }

	ngOnInit() {
	}
	acessar(pedido) {

	}
	adicionarPedido(mesa) {
		this.pedidos.push({ id: (this.pedidos.length + 1), mesa: this.mesa, status: { code: 0, text: "na Cozinha" } });
		this.mesa = "";
		this.editingPedido = true;
	}

}
