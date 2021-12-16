import { Input, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product : Product): void {
    console.log(`Product ${this.product.name} was added to cart!`);
    this.cartService.addItem(product);
  }

}
