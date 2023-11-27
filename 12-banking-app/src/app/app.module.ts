import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminDashboardComponent,
    UserLoginComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
