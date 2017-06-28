import { Component, OnInit ,Input} from '@angular/core';
import { ListaPedidoComponent, NovoPedidoComponent, PedidoService }from '../../pedido';
@Component({
  selector: 'inicia-novo-pedido',
  templateUrl: './inicia-novo-pedido.component.html',
  styleUrls: ['./inicia-novo-pedido.component.css']
})
export class IniciaNovoPedidoComponent implements OnInit {
	mesa='';
	pedidos;
	novo=false;
	@Input('fixedtable') fixedtable='';
	constructor(private pedidoService:PedidoService) {}
	
	ngOnInit() {
		this.mesa = this.fixedtable;
	}
	
	novoPedido(mesa)
	{
		this.novo=true;
	}

	adicionarPedido(pedido)
	{
		this.pedidoService.adicionarPedido(pedido).subscribe((data)=>{this.pedidoService.update();});
		this.mesa="";
		if(this.fixedtable=="")
			this.novo=false;
	}

}
