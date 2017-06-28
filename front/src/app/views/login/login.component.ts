import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth/auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	loading=false;
	model={
		usuario:"",
		senha:""
	};
	rotas=["","garcom","central","cozinha"];
	constructor(
				private http:Http,
				private router: Router,
				private route: ActivatedRoute,
				private authService: AuthService
				) { }
	
	ngOnInit() {}

	confirm() {
		this.loading=true;
		this.authService.login(this.model)
		.subscribe((data)=>{
			this.router.navigate(["/",this.rotas[data.permissao.id]]);
		},(error)=>{this.loading=false;});
	}

}
