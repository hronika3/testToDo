import { Pipe, PipeTransform } from '@angular/core';
import {IToDo} from '../interfaces';

@Pipe({
  name: 'filterToDo',
  pure: false
})
export class FilterToDoPipe implements PipeTransform {
  transform(todoList: IToDo[], filterString: string = '', filterOn: boolean): IToDo[] {
    if (filterOn) {
      return  todoList.filter((item) => {
        if (item.text.toLocaleLowerCase().startsWith(filterString.toLowerCase())) {
          return item;
        }
      });
    }
    return todoList;
  }
}
