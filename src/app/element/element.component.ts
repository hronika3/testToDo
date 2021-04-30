import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IToDo} from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent{
  @Input() todoObj: IToDo;
  @Output() todoObjRemove = new EventEmitter<void>();
}
