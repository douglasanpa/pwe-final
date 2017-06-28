import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {PedidoModel,NovoPedidoModel} from './';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class PedidoService {

	constructor(private http: Http) {}
	pedidos = new Subject();
	getPedidos()
	{	
		this.http.get("http://localhost:9000/pedido")
				 .map(
				 	(response:Response)=>response.json()
				 	)
				 .subscribe((data)=>this.pedidos.next(data));
		return this.pedidos;
	}
	update(){
		this.http.get("http://localhost:9000/pedido")
				 .map(
				 	(response:Response)=>response.json()
				 	)
				 .subscribe((data)=>this.pedidos.next(data));
	}
	atualizaPedido(pedido)
	{
		return this.http.post("http://localhost:9000/pedido/atualiza", pedido);
	}

	adicionarPedido(pedido)
	{
		return this.http.post("http://localhost:9000/pedido", pedido);
	}
}
