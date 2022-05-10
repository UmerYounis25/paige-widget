import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "paige-products-search-filter",
  templateUrl: "./search-filter.component.html"
})
export class ProductsSearchFilterComponent {
  searchText: string = "";
  @Input() placeholder: string = "Search...";
  @Output() onChangeSearch: EventEmitter<string> = new EventEmitter();
}

