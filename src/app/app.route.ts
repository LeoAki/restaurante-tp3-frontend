import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotaPedidoPage } from './nota-pedido/nota-pedido';

export const routes: Routes = [
  { path: 'nota-pedido', component: NotaPedidoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
