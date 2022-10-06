import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appExcludeWeekends]',
  providers: [{provide: NG_VALIDATORS, useExisting: ExcludeWeekendsDirective, multi:true}]
})
export class ExcludeWeekendsDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    
    let dayNumber=new Date(control.value).getDay()
    
    if(isNaN(dayNumber)) return {invalidDate:true}
    if(dayNumber==0 || dayNumber==6) return {isWeekend:true}
    else return null
  }
 

}
