import { Injectable } from '@angular/core';
import { Genre } from 'src/app/feature/components/first/enums/genre';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products : Array<ProductModel> = [
    new ProductModel('Chorus','Take control of Nara on a quest to destroy the dark cult that created her. Unlock devastating weapons & mind-bending abilities in an evolution of the space-combat shooter. Along with Forsaken, her sentient starfighter, explore ancient temples, engage in zero-g combat & venture beyond waking reality.', 30, Genre.Action, true),
      new ProductModel('After the Fall® - Launch Edition', 'From the team that brought you Arizona Sunshine® comes an epic VR action FPS with intense co-op gameplay at its core. Team up with friends and take on a hostile VR world filled with ferocious undead--mutated and twisted by the relentless cold.', 50, Genre.Action, false),
      new ProductModel('FIFA 22', 'Play FIFA 22, Get a Next Generation Player Item: receive an untradeable Next Generation Player Item in FIFA Ultimate Team starting December 15 when you play FIFA 22 by January 14, 2022*.', 124, Genre.Sports, true),
      new ProductModel('Age of Empires IV', 'One of the most beloved real-time strategy games returns to glory with Age of Empires IV, putting you at the center of epic historical battles that shaped the world.', 150, Genre.Strategy, true)
  ]

  constructor() { }

  getProducts(): Array<ProductModel> {
    return this.products;
  }
}
