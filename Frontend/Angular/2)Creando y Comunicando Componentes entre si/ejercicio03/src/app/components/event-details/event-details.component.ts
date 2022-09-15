import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../entities/Event/event';
import { EventsDataService } from '../../services/eventData/events-data.service';




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event!: Event;
    
  constructor(private dataEventos:EventsDataService ) { }

  ngOnInit(): void {
    this.event=this.dataEventos.getEvent();
  }

}
