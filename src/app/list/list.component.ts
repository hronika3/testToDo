import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ToDo} from '../interfaces';
import {TodoService} from '../todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private todoService: TodoService,
              private changeDetector: ChangeDetectorRef) {
  }

  public todoList: Array<ToDo> = [];
  public addSub: Subscription;


  public ngOnInit(): void {
    this.todoList = this.todoService.getToDoList();
    this.addSub = this.todoService.notifyResponseEvent.subscribe(() => {
      this.changeDetector.markForCheck();
    });
  }

  public trackByKey(index: number, todoObj: ToDo): number {
    return todoObj.id;
  }

  public removeByIndex(todoObjId: number): void {
    this.todoService.removeToDoByIndex(todoObjId);
  }

  public ngOnDestroy(): void {
    if (this.addSub) {
      this.addSub.unsubscribe();
    }
  }
}
