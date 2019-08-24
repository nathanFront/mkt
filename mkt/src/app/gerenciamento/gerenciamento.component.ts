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
  prodEdit: incluirProduto;

  produtos:incluirProduto[];
  
  constructor(private prodServ: GerenciamentoService, ) { }

  ngOnInit() {
    this.prod = new incluirProduto();
    this.produtoList();
    this.prodEdit = new incluirProduto();
    this.refreshProduto();
  }

  //função para salvar produtos
  salvarNovoProduto(){
    if(!this.validarCampos()) {
      this.prodServ.adicionarProduto(this.prod)
      .subscribe(
        produtos => this.adcProduto = produtos,
        error => console.error(error));
        alert("Salvo com Sucesso");
      }else{
        alert("Verifique os Campos");
      }
      this.limparCampos();
     
    }


    adcProduto(produtos: incluirProduto){
      this.produtos.push(produtos);
      this.refreshProduto();
    }

   
    //LISTA DOS PRODUTOS ITAU
    refreshProduto(){
      this.prodServ.buscarTodosProdutos()
      .subscribe(
        todosProdutos => this.produtos = todosProdutos[0],
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
    this.prod.idProduto = 0;
    this.prod.nomeProduto = '';
    this.prod.qntProduto = null;
    this.prod.valorUnitario = null;
    this.prod.sexo = null;
    this.prod.tamanho = null;
    this.refreshProduto();
  }


  //cancelar operação de inclusao
  cancelar(){
    this.limparCampos();
  }

  editarProduto(prodEdit: incluirProduto){
    this.prod.idProduto = prodEdit.idProduto;
    this.prod.nomeProduto = prodEdit.nomeProduto;
    this.prod.qntProduto = prodEdit.qntProduto;
    this.prod.sexo = prodEdit.sexo;
    this.prod.tamanho = prodEdit.tamanho;
    this.prod.valorUnitario = prodEdit.valorUnitario;
  
    this.prod = prodEdit;

  this.refreshProduto();
  }

  sim(){
  alert("Deletado com sucesso") 
  }
}
