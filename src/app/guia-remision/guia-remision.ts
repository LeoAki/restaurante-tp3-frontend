import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { GuiaRemision } from '../providers/guia-remision';
import { Waybill as GuiaRemisionInterface } from './guia-remision.interface';

@Component({
  selector: 'app-guia-remision',
  templateUrl: './guia-remision.html',
  encapsulation: ViewEncapsulation.None
})
export class GuiaRemisionPage implements OnInit {

  public notaPedidos: GuiaRemisionInterface[] = [];
  private modalNotaRef: NgbModalRef;
  private notaIndex: number;
  public notaNumero: string;
  private sub: any;
  private anularAction: boolean;

  constructor(private router: Router, private guiaApi: GuiaRemision,
    private route: ActivatedRoute,
    private modalService: NgbModal) { 
      this.getNotaPedidos();
    }

  ngOnInit() {
    this.notaNumero = this.route.snapshot.queryParams['id'];
  }

  getNotaPedidos() {
    this.guiaApi.getGuiaRemisiones().subscribe(data => {
      this.notaPedidos = data['data'];
    });
  }

}
