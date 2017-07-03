import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class ClienteService 
{
	options;
	constructor(private http:Http) {
		
		this.options = new RequestOptions({  withCredentials: true });
	 }
	clientes = new Subject();
	listarClientes()
	{
		this.http.get("http://localhost:9000/clientes",this.options)
		                .map((response:Response)=>response.json())
		                .subscribe((data)=>this.clientes.next(data));
		return this.clientes;
	}
	adicionar(cliente)
	{
		return this.http.post("http://localhost:9000/cliente",cliente,this.options)
					    .map((response:Response)=>response.json());
	}
}
