import { Component } from '@angular/core';
import { NotaPedido as NotaPedidoInterface } from './nota-pedido.interface';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Almacen } from '../providers/almacen';
import { Producto } from '../providers/producto';
import { NotaPedido } from '../providers/nota-pedido';
import { Almacen as AlmacenInterface } from '../interfaces/almacen.interface';
import { Producto as ProductoInterface } from '../interfaces/producto.interface';

@Component({
  selector: 'page-new-nota-pedido',
  templateUrl: 'new-nota-pedido.html'
})
export class NewNotaPedidoPage {
  public action: string;
  public nota: NotaPedidoInterface;
  public almacenes: AlmacenInterface[];
  public productos: ProductoInterface[];
  private modalAlmacenRef: NgbModalRef;
  private modalProductoRef: NgbModalRef;

  public query: string;

  constructor(private modalService: NgbModal,
              private almacen: Almacen,
              private producto: Producto,
              private notaApi: NotaPedido) {
    this.action = 'Nueva';
    const date = new Date();
    this.nota = <NotaPedidoInterface> {
      productos: [],
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
    };

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
    this.query = '';
    this.modalProductoRef = this.modalService.open(content);
  }

  getAlmacen(almacen: AlmacenInterface) {
    this.nota.almacen = almacen.nombre;
    this.nota.direccion = almacen.direccion;
    this.modalAlmacenRef.close();
  }

  getProducto(producto: ProductoInterface, index: number) {
    this.productos[index].disabled = true;
    this.nota.productos.push(producto);
    this.modalProductoRef.close();
  }

  quitarProducto(producto: ProductoInterface, index: number) {
    this.nota.productos.splice(index, 1);
    this.productos.filter(p => {
      if(p.codigo === producto.codigo) {
        p.disabled = false;
      }
    });
  }

  onSubmit() {
    this.notaApi.saveNotaPedido(this.nota).subscribe(data => console.log(data));
  }
}
