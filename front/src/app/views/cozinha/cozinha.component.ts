import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent implements OnInit { 
  selecionado;
  lista=[{
  		mesa:1,hora:"11:00",
  		pedido:[
  				{id:1,item:"coca-cola"},
  				{
  					id:2,
  					item:"macarronada",
  					ingredientes:
  						[
  							{
  								id:1,
  								nome:"molho de tomate"
  							},
  							{
  								id:2,
  								nome:"macarrão"
  							},
  							{
  								id:3,
  								nome:"manjericão"
  							},
  							{
  								id:4,
  								nome:"porpetas"
  							}
						]
				}
		]
	},{
  		mesa:2,
  		hora:"12:00",
  		pedido:[
  				{id:3,
  					item:"Caipirinha",
  					ingredientes:
  						[
  						{
  							id: 10,
  							nome:"limao",
  						}
  						,{
  							id: 11,
  							nome:"acúcar",
  						}
  						,{
  							id: 12,
  							nome:"gelo",
  						}
  						]
  				},
  				{
  					id:4,
  					item:"Feijoada",
  					ingredientes:
  						[
  							{
  								id:5,
  								nome:"feijão preto"
  							},
  							{
  								id:6,
  								nome:"couve"
  							},
  							{
  								id:7,
  								nome:"arroz"
  							},
  							{
  								id:8,
  								nome:"carne seca"
  							},
  							{
  								id:9,
  								nome:"carne de porco"
  							}
						]
				}
		]
	}
  ];
  selecionar(item)
  {
  	this.selecionado=item;
  }
  constructor() {}

  ngOnInit() {
  }

}
