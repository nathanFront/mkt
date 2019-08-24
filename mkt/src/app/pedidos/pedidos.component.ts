import { Solicitacao } from './../entidades/solicitarProduto';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../serviços/pedidosService/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private recebServ: PedidosService) { }

  
  pedRecebidos: Solicitacao[];

  ngOnInit() {
    this.produtosList();
  }

  produtosList(){
    this.recebServ.buscarTodosPedidos()
    .subscribe(
      todosProdutos => this.pedRecebidos = todosProdutos[0],
      error => console.log(error));
  
  }
}
