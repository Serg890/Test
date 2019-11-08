import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interface/product.interface';


@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css']
})
export class KatalogComponent implements OnInit {
  katalogProduct: IProduct[] = [
    {
      id: 1,
      name: 'article 1',
      lable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 25
    },
    {
      id: 2,
      name: 'article 2',
      lable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 35
    },
    {
      id: 3,
      name: 'article 3',
      lable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: 45
    }
  ];
  prod: IProduct[] = [];
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('article')) {
      const basket = JSON.parse(localStorage.getItem('article'));
      this.prod.push(...basket);
    }
  }

  public addBasket(i: number): void {
    this.prod.push(this.katalogProduct[i]);
    const toJson = JSON.stringify(this.prod);
    localStorage.setItem('article', toJson);
  }

}
