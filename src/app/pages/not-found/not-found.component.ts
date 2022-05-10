import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-not-found",
  template: `
    <div class='not-found'>
      <a routerLink='/product-list'> Go to products </a>
    </div>
  `
})
export class NotFoundComponent {

  constructor() { }

}
