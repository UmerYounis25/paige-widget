import { DataSource } from '@angular/cdk/table';
import { MdPaginator } from '@angular/material';
import { ProductModel } from "../../../models/product.model";
import { ProductsDatabase } from "./products.database";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

export class ProductsDataSource extends DataSource<any> {

  constructor(
    private _productsDatabase: ProductsDatabase,
    private _paginator: MdPaginator
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ProductModel[]> {
    const displayDataChanges = [
      this._productsDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this._productsDatabase.data.slice();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}
