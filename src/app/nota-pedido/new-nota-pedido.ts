import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotaPedido as NotaPedidoInterface } from './nota-pedido.interface';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

import { Almacen } from '../providers/almacen';
import { Producto } from '../providers/producto';
import { NotaPedido } from '../providers/nota-pedido';
import { Almacen as AlmacenInterface } from '../interfaces/almacen.interface';
import { Producto as ProductoInterface } from '../interfaces/producto.interface';

@Component({
  selector: 'page-new-nota-pedido',
  templateUrl: 'new-nota-pedido.html'
})
export class NewNotaPedidoPage implements OnInit, OnDestroy {
  public action: string;
  public nota: NotaPedidoInterface;
  public almacenes: AlmacenInterface[];
  public productos: ProductoInterface[];
  private modalAlmacenRef: NgbModalRef;
  private modalProductoRef: NgbModalRef;
  private modalNotaRef: NgbModalRef;

  public query: string;
  private sub: any;

  constructor(private modalService: NgbModal,
              private almacen: Almacen,
              private producto: Producto,
              private notaApi: NotaPedido,
              private router: Router,
              private route: ActivatedRoute) {

    const date = new Date();
    this.nota = <NotaPedidoInterface> {
      productos: [],
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`
    };

    this.getAlmacenes();
    this.getProductos();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(typeof params['id'] === 'undefined') {
        this.setDefaultNotaPedido();
      } else {
        this.getNotaPedido(params['id']);
      }
    });
  }

  setDefaultNotaPedido() {
    this.action = 'registrar';
  }

  getNotaPedido(uuid: string) {
    this.action = 'actualizar';
    this.notaApi.getNotaPedido(uuid).subscribe(data => {
      this.nota = data['data'];
    });
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

  openGuardarModal(content) {
    this.modalNotaRef = this.modalService.open(content);
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
      if(p.uuid === producto.uuid) {
        p.disabled = false;
      }
    });
  }

  onSubmit() {
    let action = this.createNotaPedido();

    if(this.action === 'actualizar') {
      action = this.updateNotaPedido();
    }

    action.subscribe(data => {
      if(this.action !== 'actualizar') {
        this.nota.numero = data['data']['numero'];
      }

      this.modalNotaRef.close();
    }, error => this.modalNotaRef.close());

    this.modalNotaRef.result.then(data => {
      this.router.navigateByUrl(`nota-pedido?id=${this.nota.numero}`);
    });
  }

  createNotaPedido() {
    return this.notaApi.saveNotaPedido(this.nota);
  }

  updateNotaPedido() {
    return this.notaApi.updateNotaPedido(this.nota);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
