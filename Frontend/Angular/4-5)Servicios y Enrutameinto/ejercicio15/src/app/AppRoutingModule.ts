import { NgModule } from '@angular/core';

import { EventsListComponent } from './events-list/events-list.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes:Routes=[
  {path:'eventos', component: EventsListComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: !environment.production })
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule  { }
