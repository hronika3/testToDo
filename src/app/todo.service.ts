import {Injectable} from '@angular/core';
import {Text} from './interfaces';
import {isNumeric} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  public removeByIndex(textList: Array<Text>, indexEl: number): void {
    textList.splice(indexEl, 1);
  }

  public onAdd(inputTextWidth: number, inputText: string,): Text {
    return {
      text: inputText,
      maxWidth: (inputTextWidth > 270)
    };
  }

  public outputNumbers(text: string): string {
    return text.split('').filter(item => (isNumeric(item) || item === ' ')).join('');
  }
}
