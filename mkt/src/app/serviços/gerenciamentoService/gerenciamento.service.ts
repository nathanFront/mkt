import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { incluirProduto } from 'src/app/entidades/incluirProduto';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

const httOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class GerenciamentoService {


  constructor(private HttpClient: HttpClient) { }


  adicionarProduto(produto: incluirProduto): Observable<any> {
    return this.HttpClient
      .post(api+'/produtos/novos', produto, httOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.message));

  }

  buscarTodosProdutos(): Observable<any> {
    return this.HttpClient
      .get(api+'/produtos', httOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.messange));
  }
}
