import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './components/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './fragments/header/header.component';

// views
import { LoginComponent } from './views/login/login.component';
import { CozinhaComponent } from './views/cozinha/cozinha.component';
import { GarcomComponent } from './views/garcom/garcom.component';
import { PedidoEditorComponent } from './components/pedido-editor/pedido-editor.component';

const appRoutes : Routes=[
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
    PedidoEditorComponent
  ],
  imports: [
  	// NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
