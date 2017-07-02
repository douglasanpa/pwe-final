import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class ClienteService 
{

	constructor(private http:Http) { }
	clientes = new Subject();
	listarClientes()
	{
		this.http.get("http://localhost:9000/clientes")
		                .map((response:Response)=>response.json())
		                .subscribe((data)=>this.clientes.next(data));
		return this.clientes;
	}
	adicionar(cliente)
	{
		return this.http.post("http://localhost:9000/cliente",cliente)
					    .map((response:Response)=>response.json());
	}
}
