import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

	constructor(private http: Http) { }

	login(model:{usuario: string, senha: string}) 
	{
		var req = this.http.post("http://localhost:9000/login", model)
		.map((response: Response) => response.json());
		console.log(req);
		return req;
	}
	logado(){
		return this.http.post("http://localhost:9000/logado",{});
	}
	logout()
	{
		return this.http.post("http://localhost:9000/logout",{});
	}
}
