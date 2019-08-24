import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GerenciamentoComponent,
    SolicitacaoComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    HttpClientModule,  
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
