import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDo} from '../interfaces';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {
  constructor(public todoService: TodoService) {}

  @Input() todoObj: ToDo;
  @Output() onRemoveElByIndex: EventEmitter<number> = new EventEmitter();

  public onlyNumbers(todoObjText: string): string {
    return this.todoService.onlyNumbers(todoObjText);
  }
}
