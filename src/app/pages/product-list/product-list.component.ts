import { Component, OnInit, OnDestroy } from "@angular/core";
import { MdDialog } from "@angular/material";
import { ProductService } from "../../services";
import { ConfirmDialogComponent } from "../../components/confirm-dialog";
import { ProductModel, ProductFilterModel } from "../../models/product.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "paige-product-list",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["name", "color", "type", "price", "actions"];
  selectedColor: string = null;
  searchText: string = null;
  displayedProducts: ProductModel[] = [];
  allProducts: ProductModel[] = [];
  colors: string[] = null;
  filters: ProductFilterModel = {
    search: "",
    color: ""
  };
  subscriptions: Subscription = new Subscription();

  constructor(private productService: ProductService, private dialog: MdDialog) { }

  ngOnInit() {
    this.subscriptions.add(
      this.productService.getProducts().subscribe(products => {
        this.allProducts = products;
        this.displayedProducts = products;
        let colors = products.map(c => c.color);
        this.colors = colors.filter((c, i) => colors.indexOf(c) == i);
      })
    )
  }

  onChangeFilter(key, value) {
    this.filters[key] = value;
    this.applyFilters();
  }

  // onChangeSearch(searchText: string) {
  //   this.searchText = searchText;
  //   this.applyFilters();
  // }
  
  // onChangeColor(selectedColor) {
  //   this.selectedColor = selectedColor;
  //   this.applyFilters();
  // }

  applyFilters() {
    let filteredProducts = [...this.allProducts];
    if (this.filters.color) {
      filteredProducts = filteredProducts.filter(p => 
        p.color.toLowerCase() == this.filters.color
      )
    }
    if (this.filters.search) {
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(this.filters.search.toLowerCase())
      )
    }
    this.displayedProducts = [...filteredProducts];
  }

  onClickEdit(product: ProductModel) {
    console.log('product', product)
  }
  
  onClickDelete(product: ProductModel) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent);
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.productService.removeProduct(product.id);
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

interface ProductFilters {
  search: string;
  color: string;
}

