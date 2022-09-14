export class Location {

    constructor(private _address:string, private _city:string, private _country:string){}

    get address(){ return this._address };
    get city(){ return this._city };
    get country(){ return this._country };
}
