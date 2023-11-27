import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-template-forms';
  submittedData: { username: string; email: string; selectNum: string } | null = null;

  onFormDataSubmitted(data: {
    username: string;
    email: string;
    selectNum: string;
  }) {
    console.log('Submitted User Data:', data);
  }
  
}
