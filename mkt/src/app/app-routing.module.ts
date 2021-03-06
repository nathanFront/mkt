import { PedidosComponent } from '../app/pedidos/pedidos.component';
import { GerenciamentoComponent } from './gerenciamento/gerenciamento.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'gerenciamento', component: GerenciamentoComponent},
  {path: 'solicitacao', component: SolicitacaoComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: '',

  redirectTo:'/home',
  pathMatch: 'full'}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
