import { Pipe, PipeTransform } from '@angular/core';
import {isNumeric} from 'rxjs/internal-compatibility';

@Pipe({
  name: 'onlyNumbers'
})
export class OnlyNumbersPipe implements PipeTransform {
  transform(todoObjText: string): string {
    let haveNumber = false;
    let outputString = '';
    todoObjText.split('').filter(item => {
      if (isNumeric(item)) {
        haveNumber = true;
        outputString += item;
        return item;
      }
      if (item === ' ') {
        outputString += item;
        return item;
      }
    });
    return haveNumber ? outputString : 'Цифр не обнаружено';
  }
}
