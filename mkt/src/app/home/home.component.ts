import { GerenciamentoService } from './../serviços/gerenciamentoService/gerenciamento.service';
import { incluirProduto } from 'src/app/entidades/incluirProduto';
import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtoBRQ: incluirProduto;
  produtos: incluirProduto[];
  
  constructor(private prodServ:GerenciamentoService) { }

  ngOnInit() {
    this.produtoBRQ = new incluirProduto();
    this.produtosList();
  }

  produtosList(){
    this.prodServ.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.produtos = todosProdutos[0],
      error => console.log(error));
  
  }
}
