import { Injectable } from '@angular/core';
import { Pedido, PEDIDOSMOCK } from './';

@Injectable()
export class PedidoService {

	constructor() { }

	getPedidos(): Pedido[] {
		return PEDIDOSMOCK;
	}
	addPedido(pedido: Pedido) {
		PEDIDOSMOCK.push(pedido);
	}

}
