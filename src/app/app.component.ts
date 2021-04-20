import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ToDo} from './interfaces';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private todoService: TodoService) {
  }

  public todoList: Array<ToDo> = [];

  public addToList(inputToDo: ToDo): void {
    this.todoService.addToList(this.todoList, inputToDo);
  }
}
