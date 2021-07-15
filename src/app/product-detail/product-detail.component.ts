import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.route.params.subscribe(param => {
    //   this.product = this.ProductService.getProduct(param.id)
    // })
  }

}
