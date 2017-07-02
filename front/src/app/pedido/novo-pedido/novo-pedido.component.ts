import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListaProdutoComponent, ProdutoService } from '../../produto';

@Component({
	selector: 'novo-pedido',
	templateUrl: './novo-pedido.component.html',
	styleUrls: ['./novo-pedido.component.css']
})

export class NovoPedidoComponent implements OnInit 
{
	pedido=
	{
		status:{code:1,text:"coz"},
		items:[],
		mesa:""
	};
	@Input('cliente') cliente=null;
	@Input("mesa") mesa;
	@Output("onSave") save:EventEmitter<Object> = new EventEmitter<Object>();
	@Output("onCancel") cancel:EventEmitter<Boolean> = new EventEmitter<Boolean>();
	
	searchitem="";
	items=[];
	loading=false;
	constructor(private produtoService:ProdutoService) { }

	addQt(item, qt)
	{
		item.quantidade += qt;
		if(item.quantidade > item.item.estoque) {
			item.quantidade = item.item.estoque;
		}
		if(item.quantidade < 1) {
			this.removerItem(item)
		}	
	}
	select(item)
	{
		if(item.selected)
		{
			item.selected=false;
			this.removerItem({item});
		}
		else
		{
			item.selected=true;
			this.add(item);
		}
	}
	add(item)
	{
		this.pedido.items.push({item:item, quantidade:1});
	}

	ngOnInit() {
		this.loading=true;
		this.produtoService.listarProdutos()
		.subscribe((data)=> {
			console.log(data);
			this.items=data;
			this.loading=false;
		});
	}
	
	salvar()
	{
		this.save.emit({ cliente: this.cliente, mesa:this.mesa, items:this.pedido.items });
	}
	
	removerItem(item)
	{
		for (let i =0 ;i< this.pedido.items.length;i++)
		{
			if(this.pedido.items[i].item.id==item.item.id)
			{
				item.item.selected=false;
				this.pedido.items.splice(i,1);
				break;
			}
		}
	}

	cancelar()
	{
		this.cancel.emit();
	}
}
