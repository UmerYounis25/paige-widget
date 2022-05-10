import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "paige-products-color-filter",
  templateUrl: "./color-filter.component.html"
})
export class ProductsColorFilterComponent implements OnDestroy {
  selectedColor: string = ""
  @Input() colors: string[] = [];
  @Output() onChangeColor: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnDestroy(): void {
    this.onChangeColor.unsubscribe();
  }
}

