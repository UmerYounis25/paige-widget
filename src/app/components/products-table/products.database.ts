import { ProductModel } from "../../../models/product.model";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class ProductsDatabase {

  dataChange: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);
  get data(): ProductModel[] { return this.dataChange.value; }

  constructor() {}

  initData(productsData: ProductModel[]) {
    this.dataChange.next(productsData);
  }
}