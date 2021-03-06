import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { NotaPedidoPage } from './nota-pedido';
import { NewNotaPedidoPage } from './new-nota-pedido';

import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    NotaPedidoPage,
    NewNotaPedidoPage,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    NotaPedidoPage,
    NewNotaPedidoPage
  ]
})
export class NotaPedidoPageModule {

}
