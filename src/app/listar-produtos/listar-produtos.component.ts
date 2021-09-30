import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { listaProdutoCadastrados } from '../listaProdutos';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProdutos: Produto[];
  produtoSelecionado: Produto;

  constructor(private service: DatabaseService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.listaProdutos = this.service.getProdutos();
  }

  exibir(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

}
