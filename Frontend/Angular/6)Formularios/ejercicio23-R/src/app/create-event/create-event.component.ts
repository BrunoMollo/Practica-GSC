import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../entitys/event';
import { CustomValidators } from '../CustomValidators';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventForm:FormGroup;

  constructor(private eventService: EventService, private router: Router, private fromBuilder: FormBuilder) { 
    this.eventForm= fromBuilder.group({
      name:['', [Validators.required, CustomValidators.dontRepeatName(eventService)]],
      date: ['', [Validators.required, CustomValidators.excludeWeekends, CustomValidators.dateFormat]],
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
    return input.invalid && !input.untouched  ;
  }


  inputDynamicStyles(field:string): {[klass: string]:any} {
    if(this.hasToWarn(field)) 
    return {'border-color':'red'}
    else return {}
  }



  private errorMsj:{type:string,msj:string}[]=[
    {type:'pattern', msj:"Deben ser dos letras en mayusculas"},
    {type:'required', msj:"Requerido"},
    {type:'isWeekend', msj:"No se puede poner un evento un fin de semana"},
    {type:'invalidDate', msj:"Formato de fecha invlaido"},
    {type:'repeatedName', msj:"Nombre de evento ya existe" }
  ]
  getErrorMessage(field:string):string|null{
    let inputErrors=this.eventForm.get(field)?.errors
    for( let e of this.errorMsj){
      if(inputErrors?.[e.type]) return e.msj
    }
    return null
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
