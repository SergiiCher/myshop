import { Order } from "../../orders/models/order.model";

export class Cart {
    constructor(
        public orders: Array<Order>,
        public totalCost: number
    ) { }
}
