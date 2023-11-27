import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outputmovies',
  templateUrl: './outputmovies.component.html',
  styleUrls: ['./outputmovies.component.css']
})
export class OutputmoviesComponent {
  @Input('movi') movi:any[]=[];
}
