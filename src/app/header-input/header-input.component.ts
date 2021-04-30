import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header-input',
  templateUrl: './header-input.component.html',
  styleUrls: ['./header-input.component.css']
})
export class HeaderInputComponent{
  @Input() inputString: string;
  @Input() inputButtonName: string = 'Добавить';
  @Input() inputDisabled: boolean = false;
  @Output() inputStringChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitInputString: EventEmitter<string> = new EventEmitter<string>();
}
