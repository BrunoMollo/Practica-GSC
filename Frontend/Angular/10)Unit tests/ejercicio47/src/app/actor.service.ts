import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() {
  }

  canAddMovieToActor(name: string, movieName: string):boolean {
    // metodo que queremos simular
    return !!Math.random();
  }
  
}
