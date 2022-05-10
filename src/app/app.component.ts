import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isAppLoaded: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.service.fetchProducts().subscribe(products => {
        this.service.setProducts(products);
        this.isAppLoaded = true;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
