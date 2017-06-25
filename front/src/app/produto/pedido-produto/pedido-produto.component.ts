import { Component, OnInit, Input } from '@angular/core';
import { PedidoProduto } from './pedido-produto.model';

@Component({
	selector: 'pedido-produto',
	templateUrl: './pedido-produto.component.html',
	styleUrls: ['./pedido-produto.component.css']
})
export class PedidoProdutoComponent implements OnInit {
	@Input("pedidoProdutoModel") model: PedidoProduto;
	constructor() { }

	ngOnInit() {
	}

}
