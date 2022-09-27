import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../services/events-data.service';
import { Event } from '../entitys/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events:Event[]=[];

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.events=this.route.snapshot.data['listaEventos'];
  }

}
