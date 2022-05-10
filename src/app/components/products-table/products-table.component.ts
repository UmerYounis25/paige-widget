import { Component, OnInit, ViewChild, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { MdPaginator } from '@angular/material';
import { ProductModel } from "../../models/product.model";
import { ProductsDataSource } from "./products.datasource";
import { ProductsDatabase } from "./products.database";

@Component({
  selector: "paige-products-table",
  templateUrl: "./products-table.component.html"
})
export class ProductsTableComponent implements OnInit, OnDestroy {
  productsDataSource: ProductsDataSource | null;
  productsDatabase = new ProductsDatabase();
  @Input() displayedColumns: string[] = ["name", "color"];
  @Output() onClickDelete: EventEmitter<ProductModel> = new EventEmitter();
  @ViewChild(MdPaginator) paginator: MdPaginator;
  
  @Input() set products(products: ProductModel[]) {
    this.productsDatabase.initData(products)
  }

  constructor() { }

  ngOnInit() {
    this.productsDataSource = new ProductsDataSource(
      this.productsDatabase,
      this.paginator
    )
  }

  ngOnDestroy() {
    this.onClickDelete.unsubscribe();
  }
}
