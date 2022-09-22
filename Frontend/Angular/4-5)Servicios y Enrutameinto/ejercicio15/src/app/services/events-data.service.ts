import { Injectable } from '@angular/core';
import { Event } from '../entitys/event';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {

  events:Event[]= [
    {
      id:1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Rd',
        city: 'London',
        country: 'England'
      }
    },
    {
      id:2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: '127 DT ',
        city: 'Amsterdam',
        country: 'NL'
      }
    },
    {
      id:4,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      }
    },
    {
      id:6,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      }
    },
  ]

  constructor() { }

  getEvents():Event[]{
    return this.events;
  }

  getByName(wantedName:String | undefined): Event|undefined {
    return this.events.find( e=>e.name===wantedName );
  }

  getById(wantedId:number | undefined): Event|undefined {
    return this.events.find( e=>e.id===wantedId );
  }

  exists(wantedId:number):boolean{
    return this.events.some(e=>e.id===wantedId);
  }
}
