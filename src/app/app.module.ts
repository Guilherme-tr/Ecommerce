import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { AppRoutingModule } from './app-routing.module';
import { PromocoesComponent } from './promocoes/promocoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ListarProdutosComponent,
    PromocoesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
