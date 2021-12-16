import { Genre } from 'src/app/feature/components/first/enums/genre';
import { Product } from './product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1, "2", "3", 3, Genre.Action, true)).toBeTruthy();
  });
});
