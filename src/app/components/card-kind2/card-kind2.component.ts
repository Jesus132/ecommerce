import { Component, OnInit, Input } from '@angular/core';

import { ProductData } from 'src/app/data/schema/products/Products.interface';

@Component({
  selector: 'app-card-kind2',
  templateUrl: './card-kind2.component.html',
  styleUrls: ['./card-kind2.component.scss']
})
export class CardKind2Component implements OnInit {

  img = '';
  title = '';
  price = '';
  @Input() public product: any;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.product);
    
    this.img = `https://assets.compramass.com/products/${this.product.ean}@3x.jpg`;
    this.title = this.product.name;
    this.price = (this.product.price).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
    });
  }

}
