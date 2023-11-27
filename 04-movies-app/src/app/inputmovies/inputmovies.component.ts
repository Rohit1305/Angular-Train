import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputmovies',
  templateUrl: './inputmovies.component.html',
  styleUrls: ['./inputmovies.component.css']
})
export class InputmoviesComponent {
  @Output() addMovieEvent=new EventEmitter<{name:string;description:string}>();
  @Input() newMovieName:string='';
  @Input() newMovieDescription:string='';

  submitMovie() {
    if (this.newMovieName && this.newMovieDescription) {
      const movie={
        name:this.newMovieName,
        description:this.newMovieDescription,
      };
      this.addMovieEvent.emit(movie);
      this.newMovieName='';
      this.newMovieDescription='';
    }
  }
}
