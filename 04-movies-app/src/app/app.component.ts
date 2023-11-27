import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-movies-app';
  movies:{name:string;description:string}[]=[];
  newMovieName:string='';
  newMovieDescription:string='';

  addMovie(movie:{name:string;description:string}){
    this.movies.push(movie);
  }
}
