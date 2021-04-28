import { Pipe, PipeTransform } from '@angular/core';
import {ToDo} from '../interfaces';

@Pipe({
  name: 'filterToDo',
  pure: false
})
export class FilterToDoPipe implements PipeTransform {
  transform(todoList: ToDo[], filterString: string = '', filterOn: boolean): ToDo[] {
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
