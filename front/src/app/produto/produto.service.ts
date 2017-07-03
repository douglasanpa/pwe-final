import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProdutoService 
{
	options;
  constructor(private http: Http) {
  
		this.options = new RequestOptions({withCredentials: true });
	 }

	listarProdutos()
	{
		return this.http.get("http://localhost:9000/produto/estoque",this.options)
		.map((response: Response) => response.json());;
	}
}
