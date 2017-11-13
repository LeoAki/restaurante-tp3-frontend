import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class Producto {
  constructor(private api: Api) {}

  getProductos() {
    return this.api.get('productos.array.json');
  }
}
