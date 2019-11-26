import { Component, OnInit, } from '@angular/core';
import { GerenciamentoService } from '../serviços/gerenciamentoService/gerenciamento.service';
import { Produtos } from '../entidades/Produtos';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-gerenciamento',
  templateUrl: './gerenciamento.component.html',
  styleUrls: ['./gerenciamento.component.css']
})
export class GerenciamentoComponent implements OnInit {
  delProd: Produtos;
  prod: Produtos;
  prodEdit: Produtos;

  produtos:Produtos[];
  
  constructor(private prodServ: GerenciamentoService, ) { }

  ngOnInit() {
    this.delProd = new Produtos();
    this.prod = new Produtos();
    this.produtoList();
    this.prodEdit = new Produtos();
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
        this.refreshProduto();
      }else{
        alert("Verifique os Campos");
      }
      this.limparCampos();
     
    }

    //abre o modal de confirmação para deletar
    excluir(delProd: Produtos){
      this.prod.idProduto = delProd.idProduto;
    }
  
  //confirmação do delete
    sim(delProd: Produtos){
      this.prodServ.deletarProduto(this.prod.idProduto)
      this.refreshProduto();
          alert("Excluido com Sucesso")        
        
  
    }
    
//função de adc produto na table apos inserir
    adcProduto(produtos: Produtos){
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
    return this.prod.nomeProd === '' ||
          this.prod.qntProd === null ||
          this.prod.genero === '' ||
          this.prod.modeloProd === '' ||
          this.prod.valorUnit === null;
  }




  limparCampos(){
    this.prod.idProduto = 0;
    this.prod.nomeProd = '';
    this.prod.qntProd = null;
    this.prod.valorUnit = null;
    this.prod.genero = null;
    this.prod.modeloProd = null;
    this.refreshProduto();
  }


  //cancelar operação de inclusao
  cancelar(){
    this.limparCampos();
  }

  editarProduto(prodEdit: Produtos){
    this.prod.idProduto = prodEdit.idProduto;
    this.prod.nomeProd = prodEdit.nomeProd;
    this.prod.qntProd = prodEdit.qntProd;
    this.prod.genero = prodEdit.genero;
    this.prod.modeloProd = prodEdit.modeloProd;
    this.prod.valorUnit = prodEdit.valorUnit;
  
    this.prod = prodEdit;

  this.refreshProduto();
  }

 
 
}
