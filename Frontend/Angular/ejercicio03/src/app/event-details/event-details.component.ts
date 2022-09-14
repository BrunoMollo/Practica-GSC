import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event/event';
import { Location } from '../entities/Location/location';



@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:Event = 
  new Event('ngConf 2025', '3/1/2025','8am', new Location('123 Main St', 'Salt Lake City, UT','USA'));
    
  constructor() { 
  }

  ngOnInit(): void {
  }

}
