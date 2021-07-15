import {Component, OnInit} from '@angular/core'
// import {data} from "../MockData";
import {Product} from "../Product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  products = null
  selected : any
  showDetail = (product: Product) => {
    this.selected = product
    console.log(product)
  };
}
