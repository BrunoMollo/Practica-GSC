import { Directive, ElementRef, HostListener} from '@angular/core';
import { hostname } from 'os';

@Directive({
  selector: '[hideOnHover]'
})
export class HideOnHoverDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color="#fff"
  }

  @HostListener('mouseover') onMouseOver(){
    this.element.nativeElement.style.visibility="hidden"
  }
}
