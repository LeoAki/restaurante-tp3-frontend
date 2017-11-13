import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaPedidoPage } from './nota-pedido/nota-pedido';
import { NewNotaPedidoPage } from './nota-pedido/new-nota-pedido';

export const routes: Routes = [
  { path: 'nota-pedido', component: NotaPedidoPage },
  { path: 'nota-pedido/new', component: NewNotaPedidoPage },
  { path: 'nota-pedido/edit/:id', component: NewNotaPedidoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
