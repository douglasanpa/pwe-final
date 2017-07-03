import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) 
  {

  }

logado;
  ngOnInit() {
  	this.authService.logado().subscribe((data)=>this.logado=true,(error)=>this.logado=false);
  }

}
