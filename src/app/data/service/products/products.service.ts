import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public API: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<any> {
    return this.http.get<any>(`${this.API}`);
  }

}
