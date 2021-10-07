import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: "produtos", component: ListarProdutosComponent },
  { path: "promocoes", component: PromocoesComponent },
  { path: "", redirectTo: "/promocoes", pathMatch: "full" },
  { path: "about", redirectTo: "/produtos", pathMatch: "prefix" },
  { path: "detalhes/:nome", component: ProdutoComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
