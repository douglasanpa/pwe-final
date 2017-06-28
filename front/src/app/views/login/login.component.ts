import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';


@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	user;
	pass;
	constructor(private authService: AuthService) { }
	ngOnInit() {

	}

	confirm() {
		this.authService.login(this.user, this.pass);
	}

}
