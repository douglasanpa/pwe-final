import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Router, NavigationStart } from '@angular/router';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class AuthService 
{
	private rotas = ["", "garcom", "central", "cozinha"];
	
	constructor(private router: Router, private http: Http ) 
	{
		//trava acesso a telas
		router.events.subscribe(event => {
			if (event instanceof NavigationStart) 
			{
				this.logado();
			}
		});
	}
	
	loginObserver = new Subject();
	checkloginObserver = new Subject();
	
	permissionId=-1;
	
	private parseResponse(response: Response)
	{
		return response.json();
	}

	login(model:{usuario: string, senha: string})
	{
		this.http.post("http://localhost:9000/login", model)
								.map(this.parseResponse).subscribe(
			(data)=>{
				this.permissionId=data.permissao.id;
				this.router.navigate(["/", this.rotas[data.permissao.id]]);
				this.loginObserver.next(data);
			});
		return this.loginObserver;
	}

	logado(){
		this.http.post("http://localhost:9000/logado", {})
								.map(this.parseResponse).subscribe(
			(data)=>{
				this.router.navigate(["/", this.rotas[data.permissao.id]]);
				this.checkloginObserver.next(data);
			}
		,(error)=>{
			this.router.navigate(["/"]);
		});
		return this.checkloginObserver;
	}

	logout(){
		var observer = this.http.post("http://localhost:9000/logout",{})
		.map(this.parseResponse).subscribe();
		return observer;
	}
}