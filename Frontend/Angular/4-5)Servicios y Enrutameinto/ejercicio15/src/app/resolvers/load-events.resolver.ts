import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { Event } from '../entitys/event';
import { EventsDataService } from '../services/events-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoadEventsResolver implements Resolve<Event[]> {
  
  constructor(private eventData:EventsDataService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event[]> {
    return of(this.eventData.getEvents()).pipe(delay(600)); //simula latencia con el servidor
  }
}
