import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/data/service/products/products.service';
import { Shop, Products } from 'src/app/data/schema/products/Products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  shop: Products[] | [] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  private getProducts(): void {
    this.productsService.getProducts().subscribe(
      (resp: Shop) => {
        this.shop = resp.categories.sort((i, j) => {
          if (i.ordinal > j.ordinal) {
            return 1;
          } else if (i.ordinal < j.ordinal) {
            return -1;
          }
          return 0;
        }).map(item => ({
          ...item,
          products: resp.products.filter(product => product.product_data.categories.map(categorie => categorie.category_id).includes(item.id)).sort((i, j) => {
            if ((i.product_data.categories[0].ordinal) > (j.product_data.categories[0].ordinal)) {
              return 1;
            } else if ((i.product_data.categories[0].ordinal) < (j.product_data.categories[0].ordinal)) {
              return -1;
            }
            return 0;
          })
        }));
      },
      (err) => {
        console.error(err);
      });
  }

}
