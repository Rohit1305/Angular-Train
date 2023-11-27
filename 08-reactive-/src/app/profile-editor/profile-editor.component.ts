import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
 

  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log(this.profileForm.value)
  }

  updateForm() {
    this.profileForm.patchValue({
      firstName: 'ROHIT',
      lastName:'SABAT',
      address:({
        street:'Vikhroli',
        city:'Mumbai',
        state:'Maharashtra',
        zip:'00001'
      })
    }
    )
  }
}
