import {Component, OnInit} from '@angular/core';
import {Product} from "../Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product()

  constructor(
    private ProductService: ProductService
  ) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.ProductService.addProduct(this.product)
  }


}
