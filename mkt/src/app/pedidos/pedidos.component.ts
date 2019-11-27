import { Solicitacao } from '../entidades/Pedidos';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../serviços/pedidosService/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

    
    pedidos:Solicitacao[];

  constructor(private recebServ: PedidosService) { }

  ngOnInit() {
 
    this.produtosList();
  }

  produtosList(){
    this.recebServ.buscarTodosPedidos()
    .subscribe(
      todosPedidos => this.pedidos = todosPedidos[0],
      error => console.log(error));
  
  }

  atualizar(){
    console.log("atualizado")
  }

  cancelar(){
    console.log("retonar a tela inicial");
    
  }
}
