import { Injectable } from '@angular/core';
import { privateKeys } from 'src/environments/privateKeys';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  appid=privateKeys.apiKeyWeather;

  constructor() { }

  getTomorrowForecast(city:any){
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.appid;
  }
 
}
