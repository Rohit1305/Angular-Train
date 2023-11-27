import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin } from 'src/app/model/admin';
import { LoginDto } from 'src/app/model/loginDto';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user : any;
  email: string = '';
  password: string = '';
  selectedUserType: string = ''; 
  loginDto : LoginDto = {
    email: '',
    password: '',
  }
  constructor(
    private router: Router,
    private adminService: AdminService,
    private customerService: CustomerService
  ) {}

  login() {
    if (this.selectedUserType === 'admin') {
      console.log("Helooo");
      this.adminLogin();
    } else if(this.selectedUserType === 'customer'){
      console.log(this.email);
        console.log(this.password);
      console.log(this.loginDto.email);
        console.log(this.loginDto.password);
      console.log("insdie customer");
      
      this.customerLogin();
    }
  }
  
  adminLogin() {
    this.adminService.loginAdmin(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Admin login successful!', response);
        this.user=response;
        console.log("after admin login : ",this.user);
        
        this.router.navigate(['admin-dashboard',this.user.adminId]); 
      },
      (error: any) => {
        console.error('Admin login failed:', error);
      }
    );
  }
  // adminLogin() {
  //   this.adminService.loginAdmin(this.loginDto).subscribe(
  //     (response: any) => {
  //       console.log('Admin login successful!', response);
  //       this.router.navigate(['admin-dashboard']); 
  //     },
  //     (error: any) => {
  //       console.error('Admin login failed:', error);
  //     }
  //   );
  // }

  customerLogin() {
    
    this.customerService.loginCustomer(this.email,this.password).subscribe(
      
      (response: any) => {
        console.log('Customer login successful!', response);
        this.router.navigate(['customer-dashboard']); 
      },
      (error: any) => {
        
        console.error('Customer login failed:', error);

      }
    );
  }
}
