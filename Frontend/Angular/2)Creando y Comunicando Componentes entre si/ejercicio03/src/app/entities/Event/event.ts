import { Location } from "../Location/location";

export class Event {


    constructor(private _name:string,
                private _date:String,
                private _time:String,
                private _location:Location,
        ){}


    get name(){ return this._name }
    get date(){ return this._date }
    get time(){ return this._time }
    get address(){ return this._location.address }
    get city(){ return this._location.city }
    get country(){ return this._location.country }
    get location(){ return this._location }
  

}
