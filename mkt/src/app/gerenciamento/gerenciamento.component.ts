import { Component, OnInit, } from '@angular/core';
import { GerenciamentoService } from '../serviços/gerenciamentoService/gerenciamento.service';
import { incluirProduto } from '../entidades/incluirProduto';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {

  prod: incluirProduto;


  produtos:incluirProduto[];
  
  constructor(private prodServ: GerenciamentoService, ) { }

  ngOnInit() {
    this.prod = new incluirProduto();
    this.produtoList();
    this.refreshProduto();
  }

  //função para salvar produtos
  salvarNovoProduto() {
    if (!this.validarCampos()) {
      this.prodServ.adicionarProduto(this.prod)
      .subscribe(
        produtos => this.adcProduto = produtos,
        error => console.error(error));
      }else{
        alert("Verifique os Campos")
      }
      this.limparCampos();
     
    }


    adcProduto(produtos: incluirProduto){
      this.produtos.push(produtos);
      this.refreshProduto();
    }

    //atualizar a table apos um novo cadastro
    
    refreshProduto(){
      this.prodServ.buscarTodosProdutos()
      .subscribe(
        todosProdtuos => this.produtos = todosProdtuos[0],
        error => console.error(error));   
      }
      
  //table de produtos  
  produtoList(){
    this.prodServ.buscarTodosProdutos()
    .subscribe(
      todosProdtuos => this.produtos = todosProdtuos[0],
      error => console.error(error));   
  }


  //validar campos de cadastro
  validarCampos(){
    return this.prod.nomeProduto === '' ||
          this.prod.qntProduto === null ||
          this.prod.sexo === '' ||
          this.prod.tamanho === '' ||
          this.prod.valorUnitario === null;
  }




  limparCampos(){
    this.prod.nomeProduto = '';
    this.prod.qntProduto = null;
    this.prod.valorUnitario = null;
    this.prod.sexo = null;
    this.prod.tamanho = null;
    this.refreshProduto();
  }


  cancelar(){
    this.limparCampos();
  }

}
