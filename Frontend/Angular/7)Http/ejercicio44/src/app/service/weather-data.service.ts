import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { privateKeys } from 'src/environments/privateKeys';
import { Forecast } from '../entities/forecast';



@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  appid=privateKeys.apiKeyWeather;

  constructor(private http: HttpClient) { }

  getTomorrowForecast(city:string){
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + this.appid;
    
    return this.http.get<Forecast>(url)
  }
 
}
