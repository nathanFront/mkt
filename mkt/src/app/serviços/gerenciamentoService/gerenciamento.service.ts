import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { EventEmitter } from 'events';
import { Produtos } from 'src/app/entidades/Produtos';

const httOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
var api = 'http://localhost:3000';

 @Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {
  
  idProduto: Produtos;
  
  constructor(private HttpClient: HttpClient) { }
  
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  adicionarProduto(produto: Produtos): Observable<any> {   
    return this.HttpClient
      .post(api + '/produtos/novos', produto, this.httpOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.message));

  }

  buscarTodosProdutos(): Observable<any> {
    return this.HttpClient
      .get(api +'/produtos', this.httpOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.messange));
  }

  deletarProduto(idProduto:number): Observable<any> {
    debugger;
    return this.HttpClient
    .delete(api + '/delete/'+ idProduto, this.httpOptions)
    .map(res => res)
    .catch(err => Observable.throw(err.message));
  
    
  }

  consultarNomeProduto(nomeProd:string){
    return this.HttpClient
    .get(api+ '/consulta/'+ nomeProd, httOptions)
    .map(res=> res)
    .catch(err => Observable.throw(err.messange));
  }

 
  
}