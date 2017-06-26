import { Component, OnInit } from '@angular/core';


@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	user;
	pass;
	constructor() { }
	ngOnInit() {

	}

	confirm() {
		// thi  s.authService.login(this.user, this.pass);
	}

}
