import { Genre } from "src/app/feature/components/first/enums/genre";

export class ProductModel {
    
    constructor (
        public name: string,
        public description: string,
        public price: number = 0,
        public category: Genre,
        public isAvailable: boolean = false
        ){}
}
