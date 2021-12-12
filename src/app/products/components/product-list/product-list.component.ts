import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel> = [];
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
