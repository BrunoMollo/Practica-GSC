import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  castMembers:Member[] = [];
  movieName: string;

  constructor() {
    this.movieName = 'ggg';
  }

  addCastMember(name: string, part: string) {
    let dup = this.castMembers.some(member => {
      return member.name === name || member.part === part
    })
    
    if(!dup) {
      this.castMembers.push({name: name, part: part});
    }
  }

}
