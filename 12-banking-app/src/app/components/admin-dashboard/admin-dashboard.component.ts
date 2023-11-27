import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  public currentAdmin!: admin;
  public id: any;
  customers: any[] = [];
  transactions : any[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
        console.log("admin " + this.id)
    } else {
        this.id = '';
        console.log("cust id2 : " + this.id)
    }
    console.log("cust id : " + this.id)
    })
    this.adminService.getAdminById(this.id).subscribe((data)=>{
      this.currentAdmin=data;
      console.log("admin == ",this.currentAdmin);
      
    })


    // Fetch list of customers
    this.adminService.getAllCustomers().subscribe(
      (customerData: any[]) => {
        this.customers = customerData;
      },
      error => {
        console.error('Error fetching customer list:', error);
      }
    );

    // Fetch list of customers
  this.adminService.getAllTransactions().subscribe(
    (transactionData: any[]) => {
      this.transactions = transactionData;
    },
    error => {
      console.error('Error fetching transaction list:', error);
    }
  );
  }
  

}
