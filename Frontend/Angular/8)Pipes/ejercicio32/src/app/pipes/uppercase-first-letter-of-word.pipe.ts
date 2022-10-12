import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';

@Pipe({
  name: 'uppercaseFirstLetterOfWord'
})
export class UppercaseFirstLetterOfWordPipe implements PipeTransform {

  private upercaseFirstLetter(word:string ):string {
    let [first, ...rest]= word
    return first.toUpperCase() + rest.join("").toLowerCase()
  }

  transform(value: string, ...args: unknown[]): string {
    return value.split(" ")
                .map(this.upercaseFirstLetter)
                .join(" ")
  }

}
