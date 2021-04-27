import {EventEmitter, Injectable} from '@angular/core';
import {ToDo} from './interfaces';

@Injectable()
export class TodoService {
  private todoList: Array<ToDo> = [];
  private counterId = 0;
  public notifyResponseEvent: EventEmitter<string> = new EventEmitter();

  public notifyResponse(response: string): void {
    this.notifyResponseEvent.emit(response);
  }

  public removeToDoByIndex(textObjId: number): void {
    const index = this.todoList.findIndex(todoObj => todoObj.id === textObjId);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    } else {
      console.log('Element not found');
    }
  }

  public addToList(inputText: string, inputTextWidth: boolean): void {
    this.todoList.push({
      text: inputText,
      cut: (inputTextWidth),
      id: this.counterId++
    });
    this.notifyResponse('add');
  }

  public getToDoList(): Array<ToDo> {
    return this.todoList;
  }
}
