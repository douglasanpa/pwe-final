import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {PedidoModel,NovoPedidoModel} from './';

@Injectable()
export class PedidoService {

  constructor(private http: Http) { 
    this.adicionarPedido({mesa:1,status:{code:1,text:"Na cozinha"}});
    this.adicionarPedido({mesa:4,status:{code:2,text:"Pronto para entrega"}});
    this.adicionarPedido({mesa:3,status:{code:3,text:"Entregue"}});
    this.adicionarPedido({mesa:6,status:{code:4,text:"Fechado"}});
  }
  currentId=0;
  p=[];
  getPedidos()
  {
	// this.http.get("")
	return this.p;
  }
  atualizaPedido(pedido)
  {
    for (let i =0 ;i< this.p.length;i++)
		{
			if(this.p[i].id==pedido.id)
			{
				 this.p[i]=pedido;
				break;
			}
		}
  }
  adicionarPedido(pedido)
  {
    pedido.id=++this.currentId;
    pedido.status={code:1, text:"Enviado para cozinha"};
  	this.p.push(pedido);
  }
}
