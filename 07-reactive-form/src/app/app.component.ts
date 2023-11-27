import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = '07-reactive-form';
  genders:string[]=['male','female']
  invalidUserNames=['admin','superuser'];

  userForm!:FormGroup;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userForm=new FormGroup({
      'username': new FormControl(null,Validators.required,),
      'email': new FormControl(null,[Validators.required, Validators.minLength(6),this.invalidName.bind(this),
        Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9_]+$/)],),
      'number': new FormControl(null,Validators.required),
      'gender': new FormControl('male',Validators.required),
    })
  }

  onSubmit(){
    console.log(this.userForm);
    
  }
  resetForm(){
    this.userForm.reset;
  }

  invalidName(control:FormControl):{[s:string]:boolean}{
    if(this.invalidUserNames.includes(control.value)){
      return {'invalidNames':true};
    }
   return {};
  }
}
