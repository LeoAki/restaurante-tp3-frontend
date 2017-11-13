import { Injectable } from '@angular/core';
import { Api } from './api';

import { NotaPedido as NotaPedidoInterface } from '../nota-pedido/nota-pedido.interface';

@Injectable()
export class NotaPedido {
  constructor(private api: Api) {}

  saveNotaPedido(nota: NotaPedidoInterface) {
    return this.api.post('productos.array.json', nota);
  }

  getNotaPedidos() {
    return this.api.get('nota-pedido.array.json');
  }

  anularNotaPedido(notaId: string) {
    return this.api.put('nota-pedido.array.json', {
      uuid: notaId,
      estado: 'Anulado'
    });
  }
}
