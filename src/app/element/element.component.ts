import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Text} from '../interfaces';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {
  constructor(public todoService: TodoService) {
  }

  @Input() elText: Text;
  @Output() onRemoveByIndex: EventEmitter<number> = new EventEmitter();
}
