import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDo} from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent{
  @Input() todoObj: ToDo;
  @Output() todoObjRemove = new EventEmitter<null>()
}
