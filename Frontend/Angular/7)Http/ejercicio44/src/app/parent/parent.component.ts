import { Component, OnInit } from '@angular/core';
import { Forecast } from '../entities/forecast';
import { WeatherDataService } from '../service/weather-data.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  forecast!:Forecast;
  city = '';

  constructor(private weaterData: WeatherDataService) { }

  ngOnInit() {
  }

  makeRequest() {
    this.weaterData.getTomorrowForecast(this.city).subscribe(
      (data)=>this.forecast=data
    ) 
    
  }

}

