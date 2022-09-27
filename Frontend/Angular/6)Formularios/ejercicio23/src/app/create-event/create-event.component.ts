import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      name:['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required, Validators.minLength(6)]],
      time: ['', [Validators.required, Validators.minLength(4)]],
      location: fromBuilder.group({
        address: ['', [Validators.required, Validators.minLength(3)]],
        city: ['', [Validators.required, Validators.minLength(3)]],
        country: ['', [Validators.required, Validators.minLength(3)]]
      })
    })
  }


  ngOnInit() {
  }

  guardar(){
    if(!this.eventForm.valid){ return } 

    let nuevoEvento:Event=this.eventForm.value;
    this.eventService.saveEvent(nuevoEvento);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
