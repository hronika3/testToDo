import {EventEmitter, Injectable} from '@angular/core';
import {Filter, ToDo} from './interfaces';

@Injectable()
export class TodoService {
  private todoList: Array<ToDo> = [];
  private filteredToDo: Array<ToDo> = [];
  private counterId = 0;
  public filtered = false;
  public notifyResponseEvent: EventEmitter<string> = new EventEmitter();
  public filterResponseEvent: EventEmitter<Filter> = new EventEmitter();

  public notifyResponse(response: string): void {
    this.notifyResponseEvent.emit(response);
  }
  public filterResponse(response: Filter): void {
    this.filterResponseEvent.emit(response);
  }

  public removeToDoByIndex(textObjId: number): void {
    const index = this.todoList.findIndex(todoObj => todoObj.id === textObjId);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    } else {
      console.log('Element not found');
    }
  }

  public addToList(inputText: string): void {
    this.todoList.push({
      text: inputText,
      id: this.counterId++
    });
    this.notifyResponse('add');
  }

  public filterToDo(inputFilter: string): void {
    this.filtered = !this.filtered;
    let filterObject: Filter = {
      filterString: inputFilter,
      filterOn: this.filtered
    }
    this.filterResponse(filterObject);
  }

  public getToDoList(): Array<ToDo> {
    if(this.filtered){
      return this.filteredToDo;
    }
    return this.todoList;
  }
}
