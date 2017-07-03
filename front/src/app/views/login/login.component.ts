import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	loading=false
	model={
		usuario:"",
		senha:""
	};
	constructor(private authService:AuthService) { }
	
	ngOnInit() {
		this.authService.logout();
	}

	confirm() {
		
		if(this.loading==false){
			
		this.authService.login(this.model)
						.subscribe((data)=>{
							this.loading=false;
						}
						,
						(error)=>{
							this.loading=false;
						});
						this.loading=true;
		}
	}

}
