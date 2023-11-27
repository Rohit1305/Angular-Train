import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../model/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/customer'; 

  constructor(private http: HttpClient) { }

  registerCustomer(customer: customer): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, customer);
  }

  loginCustomer(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }


}
