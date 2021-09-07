import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../entity/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
private purchaseURL ="http://localhost:9098"
  constructor(private httpClient: HttpClient) {}
  placeOrder(purchase: Purchase):Observable<any>{
    return this.httpClient.post<Purchase>(`${this.purchaseURL}/api/checkout/purchase`,purchase);
  }
}
