import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/components/orders/models/order.model';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart.list.component.html',
  styleUrls: ['./cart.list.component.css']
})
export class CartListComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  trackById(index: number, item: Order): number { return item.product.id; }

  oncleanCart(): void {
    console.log('Cart deleted!');
    this.cartService.cleanCart();
  }

  onFillCart(): void {
    this.cart = this.cartService.cart;
  }
}

