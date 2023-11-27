import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  inputText:string='';

  @Input('xyz') incomingdata:any;
  @Output() outEvent=new EventEmitter<string>();

  onSubmit(val:string){
    // this.inputText=val;
    this.outEvent.emit(val);
  }

}
