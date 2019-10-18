import { Solicitacao } from './../../entidades/solicitarProduto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Options } from 'selenium-webdriver/chrome';

const httOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'http://10.2.1.124:3000'

@Injectable({
  providedIn: 'root'
})
export class SolcitacaoService {

  constructor(private HttpClient: HttpClient) { }


  solicitarPedido(pedidos:Solicitacao): Observable<any>{
    return this.HttpClient
    .post(api +'/solicitacao', pedidos, httOptions)
    .map (res => res)
    .catch(err => Observable.throw(err.message));
    
  }


}
