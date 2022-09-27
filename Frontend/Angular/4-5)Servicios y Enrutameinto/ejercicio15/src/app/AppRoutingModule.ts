import { NgModule } from '@angular/core';

import { EventsListComponent } from './events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventExistsGuard } from './guards/event-exists.guard';
import { EventHasBeenRevisedGuard } from './guards/event-has-been-revised.guard';
import { LoadEventsResolver } from './resolvers/load-events.resolver';

const routes:Routes=[
  {path:'eventos/:id', component:EventDetailsComponent , canActivate:[EventExistsGuard], canDeactivate:[EventHasBeenRevisedGuard] },
  {path:'eventos', component: EventsListComponent, resolve:{listaEventos: LoadEventsResolver} }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: !environment.production })
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule  { }
