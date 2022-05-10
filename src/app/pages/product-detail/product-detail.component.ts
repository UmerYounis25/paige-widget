import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services";
import { ProductModel } from "../../models/product.model";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";

@Component({
  selector: "paige-product-detail",
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  form: FormGroup;
  editId: string = null;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      sku: ["", Validators.required],
      type: ["", [Validators.required, Validators.max(56)]],
      color: ["", [Validators.required, Validators.max(56)]],
      price: ["", [Validators.required, Validators.min(0)]],
      description: ["", [Validators.required, Validators.max(56)]],
    })
  }

  ngOnInit() {
    this.subscriptions.add(
      this.activatedRoute.params.subscribe(params => {
        if (params.id) {
          this.editId = params.id;
          this.subscriptions.add(
            this.productService.getProductById(params.id).subscribe(product => {
              for (let key in this.form.controls) {
                this.form.controls[key].setValue(
                  key == 'price' ? product[key] : product[key].slice(0, 56)
                )
              }
            })
          )
        }
      })
    )
  }

  onSubmit() {
    if (this.form.valid) {
      let product: any = {};
      for (let key in this.form.controls) {
        product[key] = this.form.controls[key].value;
      }
      if (this.editId) {
        product['id'] = this.editId;
        this.productService.updateProduct(product);
      } else {
        product['id'] = Date.now().toString();
        this.productService.addProduct(product);
      }
      this.router.navigateByUrl("/product-list");
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
