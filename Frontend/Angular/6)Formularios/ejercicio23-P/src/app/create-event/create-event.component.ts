import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../entitys/event';
import { FormControl, NgModel, ValidationErrors } from '@angular/forms';


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

  mustBeWarn(input:NgModel):boolean {
    return input.control.invalid && input.control.touched  
  }

  dynamicStyles(input:NgModel){
    if( this.mustBeWarn(input) ){
      return { "background-color":"#fbb" }
    }
    else{
      return {}
    } 
  }

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage(errors:ValidationErrors | null):string|null{
    if(!errors) return null
    if(errors['pattern']) return "Deben ser dos letras en mayusculas"
    if(errors['required']) return "Requerido"
    else return null;
  }

  guardar(){
    this.eventService.saveEvent(this.modelEvent)
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
