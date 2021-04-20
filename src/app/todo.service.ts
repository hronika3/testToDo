import {Injectable} from '@angular/core';
import {ToDo} from './interfaces';
import {isNumeric} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public removeByIndex(textList: Array<ToDo>, textObjId: number): void {
    textList.splice(textObjId, 1);
  }

  public onAdd(inputText: string, inputTextWidth: boolean): ToDo {
    return {
      text: inputText,
      cut: inputTextWidth
    };
  }

  public onlyNumbers(todoObjText: string): string {
    let haveNumber = false;
    const outputString = todoObjText.split('').filter(item => {
      if (isNumeric(item)) {
          haveNumber = true;
          return item;
      }
      if (item === ' ') {
        return item;
      }
    }).join('');
    return haveNumber ? outputString : 'Цифр не обнаружено';
  }

  public addToList(todoList: Array<ToDo>, inputText: ToDo): Array<ToDo> {
    todoList.push(inputText);
    return todoList;
  }
}
