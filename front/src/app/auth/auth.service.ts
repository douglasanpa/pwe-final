import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class AuthService {

	constructor(private http: Http) { }

	login(user: string, pass: string) 
	{
		var params={ usuario: user, senha: pass };
		return this.http.post("http://localhost:9000/login", params)
		.map((response: Response) => response.json());
	}
	logado(){
		return this.http.post("http://localhost:9000/logado",{});
	}
	logout()
	{
		return this.http.post("http://localhost:9000/logout",{});
	}
}
