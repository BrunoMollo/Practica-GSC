import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsListComponent } from './events-list/events-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExcludeWeekendsDirective } from './directives/exclude-weekends.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    CreateEventComponent,
    ExcludeWeekendsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

  