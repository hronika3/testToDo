import {Pipe, PipeTransform} from '@angular/core';
import {ToDo} from '../interfaces';
import {isNumeric} from 'rxjs/internal-compatibility';

@Pipe({
  name: 'onlyNumbersArray',
  pure: false
})
export class OnlyNumbersArrayPipe implements PipeTransform {

  transform(todoList: ToDo[]): ToDo[] {
    let tempToDoList = JSON.parse(JSON.stringify(todoList))
    tempToDoList.map((item) => {
      let outputString = '';
      let haveNumber = false;
      item.text.split('').map(item => {
        if (isNumeric(item)) {
          haveNumber = true;
          outputString += item;
        }
        if (item === ' ') {
          outputString += item;
        }
      });
      if (haveNumber) {
        item.text = outputString;
        return item;
      }
      item.text = 'Цифр не обнаружено';
      return item;
    });
    return tempToDoList;
  }
}
