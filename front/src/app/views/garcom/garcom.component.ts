import { Component, OnInit } from '@angular/core';
import { PedidoEditorComponent} from '../../components/pedido-editor/pedido-editor.component';

@Component({
  templateUrl: './garcom.component.html',
  styleUrls: ['./garcom.component.css']
})
export class GarcomComponent implements OnInit {
  mesa="";
  editingPedido=false;
  pedidos=[];
  constructor() { }

  ngOnInit() 
  {
  }
  acessar(pedido)
  {
    
  }
  adicionarPedido(mesa)
  {
    this.pedidos.push({id:(this.pedidos.length+1),mesa:mesa});
    this.mesa="";
    this.editingPedido=true;
  }

}
