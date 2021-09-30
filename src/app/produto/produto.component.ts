import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produtoParaExibir: Produto;




  constructor() { }

  ngOnInit(): void {
  }

}