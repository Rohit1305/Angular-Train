import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-dashboard/:id', component: AdminDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
