import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

// telas
import {
	LoginComponent,
	CozinhaComponent,
	GarcomComponent,
	PedidoComponent,
 	CentraladminComponent
} from './views';

//components
import { HeaderComponent } from './fragments/header/header.component';
import { ListaPedidoComponent } from './pedido';
import { NovoPedidoComponent } from './pedido/novo-pedido/novo-pedido.component';

import { FilterPipe } from './pipes/filter.pipe';
import { PedidoService } from './pedido';
import { ProdutoService } from './produto';
import { AuthService } from './auth/auth.service';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'cozinha', component: CozinhaComponent },
	{ path: 'central', component: CentraladminComponent },
	{ path: 'garcom', component: GarcomComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LoginComponent,
		CozinhaComponent,
		GarcomComponent,
		ListaPedidoComponent,
		PedidoComponent,
		NovoPedidoComponent,
		FilterPipe,
		CentraladminComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [
		AuthService, 
		PedidoService, 
		ProdutoService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
