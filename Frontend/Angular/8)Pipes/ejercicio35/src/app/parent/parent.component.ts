import { Component, OnInit } from '@angular/core';
import { Movie, Ratings } from '../entities/movie';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies:Movie[] = [
    new Movie("Star Wars Episode X", Ratings["PG"] ),
    new Movie("Rocky XV", Ratings["PG-13"] ),
    new Movie("Jaws the Revenge", Ratings["R"] ),
    new Movie("Avengers 6 - The Marriage of the Hulk", Ratings["PG-13"] ),
    new Movie("Finding Dory's Grandkids", Ratings["G"] ),
  ];

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    this.movies.sort(Movie.ascendingRating)
  }

  sortDesc() {
    this.movies.sort(Movie.desendingRating)
  }
  
}

