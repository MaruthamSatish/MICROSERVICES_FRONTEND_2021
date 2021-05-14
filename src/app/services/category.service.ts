import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Category } from '../entity/category';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoryURl = "http://localhost:31371";
  constructor(private httpClient: HttpClient) { }
  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.categoryURl}/api/categories`);
  }

}
