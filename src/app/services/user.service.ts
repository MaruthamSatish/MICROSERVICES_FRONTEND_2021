import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private saveUserSignUp = "http://localhost:9099";
  private getUserSignIn = "http://localhost:9099";
  constructor(private httpClient: HttpClient) { }
 // userSignUp(categoryId): Observable<any> {
    //return this.httpClient.get(`${this.saveUserSignUp}/api/userRegister//${categoryId}`);
  //}
  userSignUp(user: object): Observable<object> {  
    console.log(user);
    return this.httpClient.post(`${this.saveUserSignUp}/api/user/signUp`, user);  
  }  
  userSignIn(user: object): Observable<object> {  
    console.log(user);
    return this.httpClient.post(`${this.getUserSignIn}/api/user/signIn`, user);  
  } 
  
}
