import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventsDataService } from './services/eventData/events-data.service';
import { EventAddressComponent } from './components/event-address/event-address.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventAddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventsDataService], //Funciona aunque deje el array vacio
  bootstrap: [AppComponent]
})
export class AppModule { }
