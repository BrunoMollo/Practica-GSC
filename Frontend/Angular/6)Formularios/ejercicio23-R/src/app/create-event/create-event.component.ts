import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../entitys/event';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventForm:FormGroup;

  constructor(private eventService: EventService, private router: Router, private fromBuilder: FormBuilder) { 
    this.eventForm= fromBuilder.group({
      name:['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      location: fromBuilder.group({
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        country: ['', [Validators.required, Validators.pattern('[A-Z][A-Z]')]]
      })
    })
  }

  hasToWarn(field:string):Boolean{
    let input=this.eventForm.get(field);
    if(!input) return false;
    return input.invalid && !input.pristine;
  }


  inputDynamicStyles(field:string): {[klass: string]:any} {
    if(this.hasToWarn(field)) 
    return {'border-color':'red'}
    else return {}
  }


  private failsWith(error:string, field:string):boolean{
    return this.eventForm.get(field)?.errors?.[error]
  }
  getErrorMessage(field:string):string|null{
    if(this.failsWith('pattern',field)) return "Deben ser dos letras en mayusculas"
    if(this.failsWith('required',field)) return "Requerido"
    else return null;
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
