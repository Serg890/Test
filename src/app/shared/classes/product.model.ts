import { IProduct } from '../interface/product.interface';

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public lable: string,
        public price: number
    ) {}
}
