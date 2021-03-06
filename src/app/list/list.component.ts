import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {IToDo} from '../interfaces';
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

  public todoList: Array<IToDo> = [];
  private addSub: Subscription;

  public filter: boolean = false;
  public filterString: string = '';
  private filterSub: Subscription;

  public ngOnInit(): void {
    this.todoList = this.todoService.getToDoList();
    this.addSub = this.todoService.notifyResponseEvent.subscribe(() => {

      this.changeDetector.markForCheck();
    });
    this.filterSub = this.todoService.filterResponseEvent.subscribe((response) => {
      this.filter = response.filterOn;
      this.filterString = response.filterString;
      this.changeDetector.markForCheck();
    });
  }

  public trackByKey(index: number, todoObj: IToDo): number {
    return todoObj.id;
  }

  public removeByIndex(todoObjId: number): void {
    this.todoService.removeToDoByIndex(todoObjId);
  }

  public ngOnDestroy(): void {
    if (this.addSub) {
      this.addSub.unsubscribe();
    }
    if (this.filterSub) {
      this.filterSub.unsubscribe();
    }
  }
}
