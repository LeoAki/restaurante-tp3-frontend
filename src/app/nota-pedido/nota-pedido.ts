import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { NotaPedido } from '../providers/nota-pedido';
import { NotaPedido as NotaPedidoInterface } from './nota-pedido.interface';

@Component({
  selector: 'page-nota-pedido',
  templateUrl: 'nota-pedido.html'
})
export class NotaPedidoPage {
  public notaPedidos: NotaPedidoInterface[];
  private modalNotaRef: NgbModalRef;
  private notaIndex: number;

  constructor(private router: Router, private notaApi: NotaPedido,
              private modalService: NgbModal) {
    this.getNotaPedidos();
  }

  goToForm() {
    this.router.navigateByUrl('nota-pedido/new');
  }

  getNotaPedidos() {
    this.notaApi.getNotaPedidos().subscribe(data => {
      this.notaPedidos = data['data'];
    });
  }

  openAnularModal(content, index) {
    this.notaIndex = index;
    this.modalNotaRef = this.modalService.open(content);
  }

  anular() {
    const nota = this.notaPedidos[this.notaIndex];
    this.notaPedidos[this.notaIndex].estado = 'Anulado';

    this.notaApi.anularNotaPedido(nota.uuid).subscribe(data => {
      this.modalNotaRef.close();
    }, error => {
      this.modalNotaRef.close();
    });
  }
}
