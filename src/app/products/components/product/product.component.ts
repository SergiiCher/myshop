import { Input, Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/feature/components/first/enums/genre';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

  public onAddToCart(){
    console.log(`Product ${this.product.name} was added to cart!`);
  }

}
