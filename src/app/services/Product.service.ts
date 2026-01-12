import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import {  Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',

})

export class ProductServise{
    constructor(private http: HttpClient) { }


 getProduct() {
    return this.http.get<Product[]>(`${environment.apiUrl}/product`);
  }



}