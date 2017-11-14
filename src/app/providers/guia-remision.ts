import { Injectable } from '@angular/core';
import { Api } from './api';

import { Waybill as GuiaRemisionInterface } from '../guia-remision/guia-remision.interface';

@Injectable()
export class GuiaRemision {
  constructor(private api: Api) {}

  saveGuiaRemision(guia: GuiaRemisionInterface) {
    return this.api.post('productos.array.json', guia);
  }

  updateNotaPedido(guia: GuiaRemisionInterface) {
    return this.api.put('productos.array.json', guia);
  }

  getGuiaRemisiones() {
    return this.api.get('nota-pedido.array.json');
  }

  anularNotaPedido(guiaId: string) {
    return this.api.put('nota-pedido.array.json', {
      uuid: guiaId,
      status: 'Anulado'
    });
  }

  getGuiaRemision(uuid: string) {
    return this.api.get('nota-pedido.json');
  }
}
