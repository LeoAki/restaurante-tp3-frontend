import { Injectable } from '@angular/core';
import { Api } from './api';

import { NotaPedido as NotaPedidoInterface } from '../nota-pedido/nota-pedido.interface';

@Injectable()
export class NotaPedido {
  constructor(private api: Api) {}

  saveNotaPedido(nota: NotaPedidoInterface) {
    return this.api.post('productos.array.json', nota);
  }
}
