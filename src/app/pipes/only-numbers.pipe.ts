import {Pipe, PipeTransform} from '@angular/core';
import {isNumeric} from 'rxjs/internal-compatibility';

@Pipe({
  name: 'onlyNumbers'
})
export class OnlyNumbersPipe implements PipeTransform {
  transform(todoObjText: string): string {
    let haveNumber = false;
    let outputString = '';
    todoObjText.split('').map(item => {
      if (isNumeric(item)) {
        haveNumber = true;
        outputString += item;
      }
      if (item === ' ') {
        outputString += item;
      }
    });
    return haveNumber ? outputString : 'Цифр не обнаружено';
  }
}
