import { Solicitacao } from '../../entidades/Pedidos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { EventEmitter } from 'events';


const httOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

var api = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})


export class PedidosService {

  constructor(private HttpClient: HttpClient) { }



  buscarTodosPedidos(): Observable<any> {
    return this.HttpClient
      .get( api +'/pedidos', httOptions)
      .map(res => res)
      .catch(err => Observable.throw(err.messange));
  }

  realizarPedido(pedidos: Solicitacao): Observable<any>{
    return this.HttpClient
    .post(api +'/pedidos/novos',pedidos, httOptions )
    .map(res => res)
    .catch(err => Observable.throw(err.messange));
  }

}
