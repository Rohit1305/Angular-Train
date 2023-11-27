import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() formDataSubmitted = new EventEmitter<{username: string;email: string; selectNum: string;}>();

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const selectNum = form.value.selectNum;
    this.formDataSubmitted.emit({ username, email, selectNum });
  }

}
