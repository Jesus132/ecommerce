import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  list = [
    {
      name: 'Bebidas',
      products: [
        {
          name: 'cacacola'
        },
        {
          name: 'Pespsi'
        },
        {
          name: 'Kola-Roman'
        },
      ]
    },
    {
      name: 'lactios',
      products: [
        {
          name: 'Leche'
        },
        {
          name: 'Queso'
        },
        {
          name: 'Suero'
        },
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
