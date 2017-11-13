import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { Almacen } from './providers/almacen';
import { Producto } from './providers/producto';
import { Api } from './providers/api';

import { AppComponent } from './app.component';
import { NotaPedidoPageModule } from './nota-pedido/nota-pedido.module';

import { AppRoutingModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NotaPedidoPageModule,
    AppRoutingModule
  ],
  providers: [
    Almacen,
    Producto,
    Api
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
