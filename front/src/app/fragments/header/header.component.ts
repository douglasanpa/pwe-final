import { Component, OnInit } from '@angular/core';
import {Router, Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService:AuthService) 
  {

  }

logado;
	deslogar(){
		this.authService.logout().subscribe((data)=>this.logado=false);
		this.router.navigate(["/","login"]);
	}
  ngOnInit() {
  	this.authService.logado().subscribe((data)=>this.logado=true,(error)=>this.logado=false);
  }

}
