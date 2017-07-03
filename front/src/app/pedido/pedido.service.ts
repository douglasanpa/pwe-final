import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions} from '@angular/http';
import {PedidoModel,NovoPedidoModel} from './';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PedidoService {
	options;
	constructor(private http: Http) {
		
		this.options = new RequestOptions({ withCredentials: true });
	}
	pedidos = new Subject();

	getPedidos(type)
	{	
		this.http.get("http://localhost:9000/pedido/"+type, this.options)
				 .map(
				 	(response:Response)=>response.json()
				 	)
				 .subscribe((data)=>this.pedidos.next(data));
		return this.pedidos;
	}
	update(){
		this.http.get("http://localhost:9000/pedido", this.options)
				 .map(
				 	(response:Response)=>response.json()
				 	)
				 .subscribe((data)=>this.pedidos.next(data));
	}
	atualizaPedido(pedido)
	{
		return this.http.post("http://localhost:9000/pedido/atualiza", pedido, this.options);
	}

	adicionarPedido(pedido)
	{
		return this.http.post("http://localhost:9000/pedido", pedido, this.options);
	}
}
