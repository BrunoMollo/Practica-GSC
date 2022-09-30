import { AbstractControl, ValidationErrors } from "@angular/forms";
import { EventService } from "./event.service";

type Validator = (control: AbstractControl)=>ValidationErrors | null
type ValidatorMaker = (...services:any)=>Validator

export class CustomValidators{

    static dateFormat:Validator=(control: AbstractControl)=>{
        let dateStr:string=control.value
        if(isNaN(new Date(dateStr).getDay())){ //si me da un NaN es porque no pudo parsear el string
            return {invalidDate:true}
        }
        else return null
    }

    static excludeWeekends:Validator=(control: AbstractControl)=>{
        let dateStr:string=control.value
        let dayNumber:number=new Date(dateStr).getDay()
        if(dayNumber==0 || dayNumber==6){ // si es sabado o domingo
            return {isWeekend:true}
        }
        else return null
    }

    static dontRepeatName:ValidatorMaker=( eventService: EventService)=>(control: AbstractControl)=>{
        let name:string=control.value
        if(eventService.nameExists(name)){
            return {repeatedName:true}
        }
        else return null
    }

}
