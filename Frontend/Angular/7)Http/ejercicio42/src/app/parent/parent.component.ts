import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../entities/film';
import { FilmsDataService } from '../services/films-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movieList!: Film[]

  constructor(private filmData:FilmsDataService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.filmData.getAll().subscribe((data)=>this.movieList=data)
  }
}
