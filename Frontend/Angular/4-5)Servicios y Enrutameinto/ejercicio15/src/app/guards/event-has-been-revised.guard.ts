import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from '../event-details/event-details.component';

@Injectable({
  providedIn: 'root'
})
export class EventHasBeenRevisedGuard implements CanDeactivate<EventDetailsComponent> {
  
  canDeactivate(
    component: EventDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    if(component.reviewed===true)
      { return true }
    else 
      { return false }
  }

  
}
