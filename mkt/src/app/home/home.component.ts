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

   prodBusc: Produtos;
  constructor(private prodServ:GerenciamentoService) { }

  ngOnInit() {
    this.prodBusc = new Produtos;
    this.produtoBRQ = new Produtos();
    this.produtosList();
  }

  consultarProd(){
    debugger;    
      if(this.prodBusc.nomeProd){
        this.prodServ.consultarNomeProduto(this.prodBusc.nomeProd)
        .subscribe(
          busc => this.produtos = busc[0],
          error => console.log(error))
      }else{
        this.produtosList();
      }
    }
  

  produtosList(){
    this.prodServ.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.produtos = todosProdutos[0],
      error => console.log(error));
  
  }
}
