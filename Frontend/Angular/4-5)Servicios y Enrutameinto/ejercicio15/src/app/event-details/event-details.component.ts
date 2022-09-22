import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../entitys/event';
import { EventsDataService } from '../services/events-data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  evento:Event | undefined;

  constructor( private activatedRoute:ActivatedRoute
              ,private eventData:EventsDataService
              ,private router:Router) { }

  ngOnInit(): void {
    //Me suscitbo a la ruta para actualizar cunado cambia
    this.activatedRoute.paramMap.subscribe( params => {
      let eventId:string| null=params.get("id");
      if(eventId==null){throw new Error("No hay nombre de evento")};
      
      this.evento = this.eventData.getById(+eventId);
      if(this.evento==undefined){throw new Error("No hay evento con el nombre buscado")};
    });
  }

  returnToEvents():void{
    this.router.navigate(['eventos']);
  }

}
