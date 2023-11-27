import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../model/user';
import { admin } from '../model/admin';
import{customer} from '../model/customer'
import {customerRegistorDto} from '../model/customerRegistorDto'
import {adminRegistorDto} from '../model/adminRegistorDto'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private backendUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) {}

  getAllUsers() {

    let data=this.http.get<user[]>(`${this.backendUrl}/user/user`);
  }

  getCustomerById(id: number) {
    return this.http.get<user>(`${this.backendUrl}/user/customer/${id}`);
  }

  updateUser(user: user) {
    return this.http.put<user>(`${this.backendUrl}/user/customer`, user);
  }

  registerCustomer(customerData: customerRegistorDto) {
    return this.http.post<customer>(`${this.backendUrl}/user/customer/register`, customerData);
  }

  registerAdmin(adminData: adminRegistorDto) {
    return this.http.post<admin>(`${this.backendUrl}/user/admin/register`, adminData);
  }
}
