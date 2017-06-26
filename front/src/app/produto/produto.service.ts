import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService 
{
	produtos=[
		{id:1,nome:"Pizza de Mussarela",ingredientes:[{nome:"queijo"},{nome:"molho de tomate"},{nome:"azeitona"},{nome:"orégano"}]}
		,
		{id:2,nome:"Pizza de Calabresa",ingredientes:[{nome:"calabresa"},{nome:"molho de tomate"},{nome:"cebola"},{nome:"orégano"}]}
	];
  constructor() { }
	listarProdutos()
	{
		return 	this.produtos;
	}
}
