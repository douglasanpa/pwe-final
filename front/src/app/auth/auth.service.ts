import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Router, NavigationStart } from '@angular/router';

@Injectable()
export class AuthService 
{
	private rotas = ["", "garcom", "central", "cozinha"];
	
	constructor(private router: Router, private http: Http ) 
	{
		//trava acesso a telas
		// router.events.subscribe(event => {
		// 	if (event instanceof NavigationStart) 
		// 	{
		// 		this.logado();
		// 	}
		// });
	}
	
	private parseResponse(response: Response)
	{
		return response.json();
	}

	login(model:{usuario: string, senha: string})
	{
		var observer = this.http.post("http://localhost:9000/login", model)
								.map(this.parseResponse);
		observer.subscribe(
			(data)=>{
				this.router.navigate(["/", this.rotas[data.permissao.id]]);
			});
		return observer;
	}

	logado(){
		var observer = this.http.post("http://localhost:9000/logado", {})
								.map(this.parseResponse);
		observer.subscribe(
			(data)=>{
				this.router.navigate(["/", this.rotas[data.permissao.id]]);
			}
		,(error)=>{
			this.router.navigate(["/"]);
		});
		return observer;
	}

	logout(){
		var observer = this.http.post("http://localhost:9000/logout",{})
		.map(this.parseResponse).subscribe();
		return observer;
	}
}