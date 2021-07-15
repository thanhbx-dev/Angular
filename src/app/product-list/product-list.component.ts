import {Component, OnInit} from '@angular/core';
import {Product} from "../Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selected: Product;

  constructor(
    private ProductService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  showDetail = (product: Product) => {
    this.selected = product
  };

  getProducts() {
    this.ProductService.getProducts().subscribe(data => {
      this.products = data
    })
  }
  removeItem(id:number){
    this.ProductService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(product => product.id != data.id);
    })
  }


}
