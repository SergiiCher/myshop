import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  products: Array<ProductModel> = [];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  public trackByName(index: number, item: ProductModel): string { return item.name; }

  public oncleanCart(){
    this.products = [];
    console.log('Cart deleted!');
  }

  public onFillCart(){
    this.products = this.cartService.getProducts();
  }
}
