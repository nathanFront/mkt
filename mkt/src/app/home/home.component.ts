import { GerenciamentoService } from './../serviços/gerenciamentoService/gerenciamento.service';
import { Produtos } from 'src/app/entidades/Produtos';
import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtoBRQ: Produtos;
  produtos: Produtos[];
  
  constructor(private prodServ:GerenciamentoService) { }

  ngOnInit() {
    this.produtoBRQ = new Produtos();
    this.produtosList();
  }

  produtosList(){
    this.prodServ.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.produtos = todosProdutos[0],
      error => console.log(error));
  
  }
}
