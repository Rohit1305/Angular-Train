import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/model/admin';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';
import { customer } from 'src/app/model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  admin: admin = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  customer: customer = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  selectedUserType: string = ''; 

  constructor(private adminService: AdminService, private customerService: CustomerService,private router: Router) { }


  register() {
    if (this.selectedUserType === 'admin') {
      console.log("Helooo");
      this.registerAdmin();
    } else if(this.selectedUserType === 'customer'){
      console.log("insdie customer");
      
      this.registerCustomer();
    }
  }

  registerAdmin(): void {
    this.adminService.registerAdmin(this.admin).subscribe(
      response => {
        console.log('Admin registered successfully!', response);
        this.router.navigate(['/user-login']);
      },
      error => {
        console.error('Error registering admin:', error);
      }
    );
  }

  registerCustomer(): void {
    this.customerService.registerCustomer(this.customer).subscribe(
      response => {
        console.log('Customer registered successfully!', response);
        this.router.navigate(['/user-login']);
      },
      error => {
        console.error('Error registering customer:', error);
      }
    );
  }


}
