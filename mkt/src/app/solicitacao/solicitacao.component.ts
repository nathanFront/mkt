import { Solicitacao } from '../entidades/Pedidos';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/entidades/Produtos';
import { GerenciamentoService } from './../serviços/gerenciamentoService/gerenciamento.service';
import { PedidosService } from '../serviços/pedidosService/pedidos.service';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  constructor(private prodServ:GerenciamentoService, private pedidosServ: PedidosService) { }
  
  //traz todos os produtos disponiveis
  produtoBRQ: Produtos;
  pedidos: Produtos[];

  
  solicitar: Solicitacao;  
  
  pedidosRealizados: Solicitacao[];

  ngOnInit() {
    this.produtoBRQ = new Produtos();
    this.produtosList();
    this.solicitar = new Solicitacao();
     this.refreshPedido();
  }

  produtosList(){
    this.prodServ.buscarTodosProdutos()
    .subscribe(
      todosProdutos => this.pedidos = todosProdutos[0],
      error => console.log(error));
  
  }

  enviarPedido(){
    if(!this.validarCampos()){
      this.pedidosServ.realizarPedido(this.solicitar)
      .subscribe(
        pedi => this.adcProduto = pedi,
        error => console.error(error))
      alert("Pedido Efetuado")
    }else{
      alert("Verifique os Campos");
    }
    this.limparCampos();
    
  }


  adcProduto(pedidos: Solicitacao){
    this.pedidosRealizados.push(pedidos);
     this.refreshPedido();
  }
  
  refreshPedido(){
    this.pedidosServ.buscarTodosPedidos()
    .subscribe(
      todosPedidos => this.pedidosRealizados = todosPedidos[0],
      err => console.error(err));
  }

  validarCampos(){

    return this.solicitar.nomeGestor == '' ||
           this.solicitar.nomeSolic === '' ||
          this.solicitar.qntProduto === null ||
          this.solicitar.centroCusto === ''||
          this.solicitar.codProj == '' ||
          this.solicitar.genero=== '' ||
          this.solicitar.modelo === '';
         
  }


  limparCampos(){
    this.solicitar.nomeGestor == '' ||
    this.solicitar.nomeSolic === '' ||
   this.solicitar.qntProduto === null ||
   this.solicitar.centroCusto === ''||
   this.solicitar.codProj == '' ||
   this.solicitar.genero=== '' ||
   this.solicitar.modelo === '' ||
    this.refreshPedido();
  }
}

