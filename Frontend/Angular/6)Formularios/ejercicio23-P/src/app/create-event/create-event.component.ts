import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../entitys/event';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  modelEvent:Event={
    id: undefined,
    name: '',
    date: '',
    time: '',
    location: {
      address: '',
      city: '',
      country: ''
    }
  }


  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  guardar(){
    this.eventService.saveEvent(this.modelEvent)
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
