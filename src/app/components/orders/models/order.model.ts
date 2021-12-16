import { Product } from "../../products/models/product.model";


export class Order {
    constructor(
        public product: Product,
        public quantity : number
    ) { }
}
