import { Injectable } from '@angular/core';
import { Event } from '../../entities/Event/event';
import { Location } from '../../entities/Location/location';

@Injectable({
  providedIn: 'root'
})
export class EventsDataService {

  constructor() { }

  getEvent():Event{
    //con un poco de imaginacion, esto es una peticion httpgit
    return new Event('ngConf 2025', '3/1/2025','8am', new Location('123 Main St', 'Salt Lake City, UT','USA'));
  }
}
