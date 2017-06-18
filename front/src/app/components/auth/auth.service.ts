import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import '../../api';


@Injectable()
export class AuthService 
{
  
  constructor(private http: Http) { }

  login(user : string, pass : string)
  {
  	let loginparams = { user : user, pass : pass };
  	console.log(loginparams);
	// return this.http.post(api.login, loginparams).map((response: Response) => response.json());
  }
}
