import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-nota-pedido',
  templateUrl: 'nota-pedido.html'
})
export class NotaPedidoPage {
  constructor(private router: Router) {}

  goToForm() {
    this.router.navigateByUrl('nota-pedido/new');
  }
}
