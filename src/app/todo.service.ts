import {EventEmitter, Injectable} from '@angular/core';
import {IFilter, IToDo} from './interfaces';

@Injectable()
export class TodoService {
  private todoList: Array<IToDo> = [];
  private counterId = 0;
  public filterOn = false;
  public notifyResponseEvent: EventEmitter<string> = new EventEmitter();
  public filterResponseEvent: EventEmitter<IFilter> = new EventEmitter();

  public notifyResponse(response: string): void {  // addNotify
    this.notifyResponseEvent.emit(response);
  }
  public filterResponse(response: IFilter): void {
    this.filterResponseEvent.emit(response);
  }

  public removeToDoByIndex(textObjId: number): void {    // removeToDoById
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
    this.filterOn = !this.filterOn;
    let filterObject: IFilter = {
      filterString: inputFilter,
      filterOn: this.filterOn
    }
    this.filterResponse(filterObject);
  }

  public getToDoList(): Array<IToDo> {
    return this.todoList;
  }
}
