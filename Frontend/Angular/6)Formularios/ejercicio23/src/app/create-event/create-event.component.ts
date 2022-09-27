import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../entitys/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {



  eventForm:FormGroup= new FormGroup({
    name:new FormControl(),
    date: new FormControl(),
    time: new FormControl(),
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
    })
  })

  constructor(private eventService: EventService, private router: Router) { 
  }


  ngOnInit() {
  }

  guardar(){
    let nuevoEvento:Event={
      id: undefined,
      name: this.eventForm.get("name")?.value,
      date: this.eventForm.get("date")?.value,
      time: this.eventForm.get("time")?.value,
      location: {
        address: this.eventForm.get("location")?.get("address")?.value,
        city: this.eventForm.get("location")?.get("city")?.value,
        country: this.eventForm.get("location")?.get("country")?.value,
      }
    }
    this.eventService.saveEvent(nuevoEvento);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
