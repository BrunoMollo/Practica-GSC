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

  movieList!: Film[] //no me conviene guardarlo como obsevable para modificar el estado de pending
  pending=false

  constructor(private filmData:FilmsDataService) { }

  ngOnInit() {
  }

  makeRequest():void{
    this.pending=true
    this.filmData.getAll().subscribe((data)=>{
        this.movieList=data
        this.pending=false
      })
  }
}
