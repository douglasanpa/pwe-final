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
	GarcomComponent
} from './views';

//components
import { HeaderComponent } from './fragments/header/header.component';
import { AuthComponent } from './auth/auth.component';
import {
	PedidoEditorComponent,
	PedidoListComponent,
	PedidoService
} from './pedido';

import { AuthService } from './auth/auth.service';
import {
	ProdutoListComponent,
	PedidoProdutoListComponent,
	ProdutoSelectorComponent,
	ProdutoService
} from './produto';
import { PedidoProdutoComponent } from './produto/pedido-produto/pedido-produto.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	// { path: 'topic/:id', component: TopicComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'cozinha', component: CozinhaComponent },
	{ path: 'garcom', component: GarcomComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		AuthComponent,
		HeaderComponent,
		CozinhaComponent,
		GarcomComponent,
		PedidoEditorComponent,
		PedidoListComponent,
		ProdutoListComponent,
		PedidoProdutoListComponent,
		ProdutoSelectorComponent,
		PedidoProdutoComponent
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
