import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shop } from 'src/app/data/schema/products/Products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public API: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Shop> {
    return this.http.get<Shop>(`${this.API}`);
  }

}
