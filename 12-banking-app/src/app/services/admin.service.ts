import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from '../model/admin';
import { LoginDto } from '../model/loginDto';
import { customer } from '../model/customer';
import { Transaction } from '../model/transaction';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8080/admin'; 

  constructor(private http: HttpClient) { }

  registerAdmin(admin: admin): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, admin);
  }

  loginAdmin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  getAllCustomers(): Observable<customer[]> {
    return this.http.get<customer[]>(`${this.apiUrl}/customer`);
  }

  getAdminById(id:number):Observable<admin>{
    return this.http.get(`${this.apiUrl}/${id}`) as Observable<admin>;
  }

  getAllTransactions() : Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.apiUrl}/all-transactions`);
  }

}
