import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input} from '@angular/core';
import {ToDo} from '../interfaces';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements DoCheck {
  constructor(private todoService: TodoService,
              private changeDetector: ChangeDetectorRef) {
  }

  @Input() todoList: Array<ToDo> = [];

  public trackByKey(index: number, todoObj: ToDo): number {
    todoObj.id = index;
    return todoObj.id;
  }

  public ngDoCheck(): void {
    this.changeDetector.detectChanges();
  }

  public removeByIndex(todoObjId: number): void {
    this.todoService.removeByIndex(this.todoList, todoObjId);
  }
}
