import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule  } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import {
  ProductListComponent,
  ProductDetailComponent,
  NotFoundComponent
} from "./pages";

export const routes: Routes =[
  { path: "product-list", component: ProductListComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "product-add", component: ProductDetailComponent },
  { path: "", redirectTo: "product-list", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  providers: [ ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
