import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {PedidoModel,NovoPedidoModel} from './';

@Injectable()
export class PedidoService {

	constructor(private http: Http) {}

	getPedidos()
	{
		return this.http.get("http://localhost:9000/pedido").map((response:Response)=>response.json());
	}
	atualizaPedido(pedido)
	{
		return this.http.post("http://localhost:9000/atualizapedido", pedido);	
	}
	adicionarPedido(pedido)
	{
		return this.http.post("http://localhost:9000/pedido", pedido);
	}
}
