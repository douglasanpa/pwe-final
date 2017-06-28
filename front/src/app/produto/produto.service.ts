import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProdutoService 
{
	// produtos=[
	// 	{id:1,nome:"Pizza de Mussarela",ingredientes:[{nome:"queijo"},{nome:"molho de tomate"},{nome:"azeitona"},{nome:"orégano"}]}
	// 	,
	// 	{id:2,nome:"Pizza de Calabresa",ingredientes:[{nome:"calabresa"},{nome:"molho de tomate"},{nome:"cebola"},{nome:"orégano"}]}
	// ];
  constructor(private http: Http) { }

	listarProdutos()
	{
		var req = this.http.get("http://localhost:9000/produto")
		.map((response: Response) => response.json());
		console.log(req);
		return req;
	}
}
