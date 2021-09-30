import { Injectable } from '@angular/core';
import { listaProdutoCadastrados } from './listaProdutos';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listaProdutos: Produto[] = listaProdutoCadastrados;

  constructor() { }

  getProdutos(): Produto[] {
    return this.listaProdutos;
  }

  addProduto(produto: Produto) {
    if (produto.price < 0 || produto.qtde < 0 || produto.name.length < 5) {
      return false;
    }
    this.listaProdutos.push(produto);
    return true;
  }
}
