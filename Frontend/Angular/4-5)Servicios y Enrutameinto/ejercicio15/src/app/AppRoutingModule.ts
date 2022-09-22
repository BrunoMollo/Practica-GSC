import { NgModule } from '@angular/core';

import { EventsListComponent } from './events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes:Routes=[
  {path:'eventos', component: EventsListComponent, children:[
    {path:':name', component:EventDetailsComponent }
  ]}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: !environment.production })
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule  { }
