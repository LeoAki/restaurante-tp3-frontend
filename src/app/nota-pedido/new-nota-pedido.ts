import { Component } from '@angular/core';
import { NotaPedido } from './nota-pedido.interface';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Almacen } from '../providers/almacen';
import { Producto } from '../providers/producto';
import { Almacen as AlmacenInterface } from '../interfaces/almacen.interface';
import { Producto as ProductoInterface } from '../interfaces/producto.interface';

@Component({
  selector: 'page-new-nota-pedido',
  templateUrl: 'new-nota-pedido.html'
})
export class NewNotaPedidoPage {
  public action: string;
  public nota: NotaPedido;
  public almacenes: AlmacenInterface[];
  public productos: ProductoInterface[];
  private modalAlmacenRef: NgbModalRef;
  private modalProductoRef: NgbModalRef;

  constructor(private modalService: NgbModal,
              private almacen: Almacen,
              private producto: Producto) {
    this.action = 'Nueva';
    this.nota = <NotaPedido> {productos: []};

    this.getAlmacenes();
    this.getProductos();
  }

  getAlmacenes() {
    this.almacen.getAlmacenes().subscribe(data => {
      this.almacenes = data['data'];
    });
  }

  getProductos() {
    this.producto.getProductos().subscribe(data => {
      this.productos = data['data'];
    });
  }

  openAlmacenModal(content) {
    this.modalAlmacenRef = this.modalService.open(content);
  }

  openProductoModal(content) {
    this.modalProductoRef = this.modalService.open(content);
  }

  getAlmacen(almacen: AlmacenInterface) {
    this.nota.almacen = almacen.nombre;
    this.nota.direccion = almacen.direccion;
    this.modalAlmacenRef.close();
  }

  getProducto(producto: ProductoInterface) {
    this.nota.productos.push(producto);
    this.modalProductoRef.close();
  }

  onSubmit() {}
}
