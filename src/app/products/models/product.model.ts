import { Genre } from "src/app/feature/components/first/enums/genre";

export class Product {

    constructor (
        public id: number,
        public name: string,
        public description: string,
        public price: number = 0,
        public category: Genre,
        public isAvailable: boolean = false
        ){}
}
// В названии файла стоит использовать . вместо -
