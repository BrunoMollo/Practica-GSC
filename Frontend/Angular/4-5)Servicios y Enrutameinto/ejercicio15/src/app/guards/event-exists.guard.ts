import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsDataService } from '../services/events-data.service';

@Injectable({
  providedIn: 'root'
})
export class EventExistsGuard implements CanActivate {

  constructor(private eventData:EventsDataService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    let id=route.paramMap.get("id");
    if(id==null) return false;
    else{ return this.eventData.exists(+id); }
  }
  
}
