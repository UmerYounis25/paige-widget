import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ProductModel } from "../models/product.model";
import 'rxjs/add/operator/map'
import { Observer } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ProductService {
  private products: ProductModel[] = [];
  private productSource: BehaviorSubject<ProductModel[]> = new BehaviorSubject([]);

  constructor(private http: Http) {}

  fetchProducts(): Observable<ProductModel[]> {
    return this.http.get(environment.productsPath)
    .map(res => res.json())
  }

  setProducts(products: ProductModel[]): void {
    this.products = products;
    this.productSource.next(this.products);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.productSource.asObservable();
  }
  
  getProductById(id: string): Observable<ProductModel[]> {
    return Observable.create((observer: Observer<ProductModel>) => {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return observer.next(product);
      } else {
        return observer.error("Product not exists with id: " + id);
      }
    });
  }
  
  addProduct(product: ProductModel) {
    this.products.push(product);
  }
  
  updateProduct(product: ProductModel) {
    const productIndex = this.products.findIndex(p => p.id === product.id);
    if (productIndex >= 0) {
      this.products[productIndex] = product;
    }
    this.productSource.next(this.products);
  }
  
  removeProduct(id: string) {
    this.products = this.products.filter(p => p.id != id);
    this.productSource.next(this.products);
  }
}
