import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdInputModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { ProductService } from "./services";
import { ComponentsModule } from "./components/components.module";
import {
  ProductDetailComponent,
  ProductListComponent,
  NotFoundComponent 
} from "./pages";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    ProductDetailComponent,
    ProductListComponent,
    NotFoundComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
