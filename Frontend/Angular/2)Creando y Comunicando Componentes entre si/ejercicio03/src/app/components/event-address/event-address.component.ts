import { Component, Input, OnInit } from '@angular/core';

import { Location } from 'src/app/entities/Location/location';

@Component({
  selector: 'app-event-address',
  templateUrl: './event-address.component.html',
  styleUrls: ['./event-address.component.css']
})
export class EventAddressComponent implements OnInit {

  @Input() location!:Location;

  constructor() { }

  ngOnInit(): void {
    if(this.location===undefined){
        throw new Error("[locacion] no especificada");
    }

  }

}
