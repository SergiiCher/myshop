import { Injectable } from '@angular/core';
import { Genre } from 'src/app/feature/components/first/enums/genre';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // я думаю, что в корзине должна использоваться другая модель,
  // например в нее надо добавить количество купленого товара...
  private products : Array<ProductModel> = [
      new ProductModel('Age of Empires IV', 'One of the most beloved real-time strategy games returns to glory with Age of Empires IV, putting you at the center of epic historical battles that shaped the world.', 150, Genre.Strategy, true),
      new ProductModel('Red Dead Redemption 2', 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.', 980, Genre.Adventure, true)
  ]

  constructor() { }

  getProducts(): Array<ProductModel> {
    return this.products;
  }
}
