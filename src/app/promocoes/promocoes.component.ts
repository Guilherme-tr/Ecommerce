import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
  }

  getProdutos(): void {
    this.listaProdutos = this.database.getProdutosPromocao();
  }

}
