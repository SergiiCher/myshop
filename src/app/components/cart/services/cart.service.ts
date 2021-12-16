import { Injectable } from '@angular/core';
import { Order } from '../../orders/models/order.model';
import { Product } from '../../products/models/product.model';
import { Cart } from '../models/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  // я думаю, что в корзине должна использоваться другая модель,
  // например в нее надо добавить количество купленого товара...
  private orders: Array<Order> = [];

  cart: Cart = {
    orders: [],
    totalCost: 0
  };

  // totalCost: number = 10;

  constructor() { }

  addItem(product: Product) {
    let order = this.cart.orders.find(x => x.product.id === product.id);
    if (order == null) {
      this.cart.orders.push(new Order(product, 1));
    }
    else {
      order.quantity++;
    }
    this.calculateTotalCoast();
  }

  cleanCart(){
    this.cart = new Cart([],0);
  }

  private calculateTotalCoast(): void {
    this.cart.orders.forEach(p => {
      this.cart.totalCost += p.product.price;
    });
  }
}
