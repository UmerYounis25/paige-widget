import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MdTableModule,
  MdPaginatorModule,
  MdInputModule,
  MdSelectModule,
  MdDialogModule,
  MdButtonModule
} from '@angular/material';

import { ProductsTableComponent } from './products-table';
import { ProductsColorFilterComponent } from './color-filter';
import { ProductsSearchFilterComponent } from './search-filter';
import { ConfirmDialogComponent } from './confirm-dialog';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdDialogModule,
    CdkTableModule,
    MdTableModule,
    MdPaginatorModule
  ],
  declarations: [
    ProductsTableComponent,
    ProductsSearchFilterComponent,
    ProductsColorFilterComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  exports: [
    ProductsTableComponent,
    ConfirmDialogComponent,
    ProductsSearchFilterComponent,
    ProductsColorFilterComponent
  ],
  providers: []
})
export class ComponentsModule { }
