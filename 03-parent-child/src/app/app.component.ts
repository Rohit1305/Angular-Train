import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '03-parent-child';
  dataVal=10;
  textValue=''

  datafromchild(val:string){
    this.textValue=val;
  }
}
