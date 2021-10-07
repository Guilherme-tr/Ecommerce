import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produtoParaExibir: Produto;

  constructor(private database: DatabaseService, private rota: ActivatedRoute, private local: Location) { }

  ngOnInit(): void {
    this.getProduto();
  }
  getProduto(): void {
    let nomeProduto = this.rota.snapshot.paramMap.get("nome");
    this.produtoParaExibir = this.database.getProdutoByName(nomeProduto);
  }

}
