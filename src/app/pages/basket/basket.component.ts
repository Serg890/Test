import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/product.interface';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketArticle: IProduct[] = [];
  count: number;
  constructor() { }

  ngOnInit() {
    this.getBasketProduct();
    this.getSum();
  }

  public getBasketProduct(): void {
    if (localStorage.length > 0) {
      if (localStorage.getItem('article')) {
        this.basketArticle = JSON.parse(localStorage.getItem('article'));
      }
    }
  }

  public getSum(): void {
    this.count = this.basketArticle.reduce((sum, item) => sum + item.price, 0);
  }

  public deleteArticle(i: number): void {
    this.basketArticle = JSON.parse(localStorage.getItem('article'));
    this.basketArticle.splice(i, 1);
    localStorage.setItem('article', JSON.stringify(this.basketArticle));
    this.getSum();
  }



}
