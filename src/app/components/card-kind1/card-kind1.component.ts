import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-kind1',
  templateUrl: './card-kind1.component.html',
  styleUrls: ['./card-kind1.component.scss']
})
export class CardKind1Component implements OnInit {

  img = '';
  title = '';
  price = '';
  @Input() public product: any;

  constructor() {
  }
  
  ngOnInit(): void {
    this.img = `https://assets.compramass.com/products/${this.product.ean}-80@3x.jpg`;
    this.title = this.product.name;
    this.price = (this.product.price).toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
    });
  }

}
