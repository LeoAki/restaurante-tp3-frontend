import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { GuiaRemisionPage } from './guia-remision';

import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
  declarations: [
    GuiaRemisionPage,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    GuiaRemisionPage
  ]
})
export class GuiaRemisionPageModule {

}
