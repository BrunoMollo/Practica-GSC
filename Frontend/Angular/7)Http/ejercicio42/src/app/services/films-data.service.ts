import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../entities/film';
import { SwapiResponse } from '../entities/swapi-response';


@Injectable({
  providedIn: 'root'
})
export class FilmsDataService {

  readonly url = environment.starWarsApi;

  constructor(private http: HttpClient) { }

  getAll():Observable<Film[]>{
    return this.http.get<SwapiResponse>(`${this.url}/films`)
              .pipe( map( (resp)=>resp.results ) )
  }

}
