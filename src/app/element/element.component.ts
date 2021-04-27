import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ToDo} from '../interfaces';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementComponent implements OnInit{
  @Input() todoObj: ToDo;
  @Output() todoObjRemove = new EventEmitter<null>();

  public title = '';
  public ngOnInit(): void {
    if (this.todoObj.cut) {
      this.title = this.todoObj.text;
    }
  }
}
