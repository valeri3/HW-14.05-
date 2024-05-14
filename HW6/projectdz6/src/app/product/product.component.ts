import {Component, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";

class Product {
  constructor(
    public img: string,
    public name: string,
    public list_text: string[]
  ) {
  }
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor() {
    this.products = []; // Инициализация пустого массива продуктов
  }

  ngOnInit(): void {
    const productData = [
      {
        img: '../../assets/products-img/noutbuki.png',
        name: 'Apple Ipad',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/kompyutery.png',
        name: 'Asus',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/monitory.png',
        name: 'Hp',
        list_text: ['Some characteristics']
      },
      // Добавьте остальные продукты по аналогии
      {
        img: '../../assets/products-img/tovary-dlya-gejmerov.png',
        name: 'Acer',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/planshety.png',
        name: 'Lenovo',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/kabeli-i-perekhodniki.png',
        name: 'Samsung',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/kompyuternye-komplektuyushchie.png',
        name: 'Dell',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/setevoe-oborudovanie.png',
        name: 'Canon',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/naushniki-i-aksessuary.png',
        name: 'Tp-link',
        list_text: ['Some characteristics']
      },
      {
        img: '../../assets/products-img/klaviatury-i-myshi.png',
        name: 'Logitech',
        list_text: ['Some characteristics']
      }
    ];

    for (const data of productData) {
      this.products.push(new Product(data.img, data.name, data.list_text));
    }
  }
}
