import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Text} from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent {
  @Input() elText: Text;
  @Output() deleteElement: EventEmitter<number> = new EventEmitter();
}
