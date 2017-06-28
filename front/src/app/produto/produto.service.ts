import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProdutoService 
{
  constructor(private http: Http) { }

	listarProdutos()
	{
		var req = this.http.get("http://localhost:9000/produto")
		.map((response: Response) => response.json());
		console.log(req);
		return req;
	}
}
