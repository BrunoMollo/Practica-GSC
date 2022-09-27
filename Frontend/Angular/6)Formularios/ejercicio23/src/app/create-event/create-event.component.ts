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



  eventForm:FormGroup

  constructor(private eventService: EventService, private router: Router, private fromBuilder: FormBuilder) { 
    this.eventForm= fromBuilder.group({
      name:[''],
      date: [''],
      time: [''],
      location: fromBuilder.group({
        address: [''],
        city: [''],
        country: ['']
      })
    })
  }


  ngOnInit() {
  }

  guardar(){
    let nuevoEvento:Event=this.eventForm.value;
    this.eventService.saveEvent(nuevoEvento);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
