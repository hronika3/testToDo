import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {ToDo} from '../interfaces';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private todoService: TodoService) {
  }

  @Output() sendInputToDo: EventEmitter<ToDo> = new EventEmitter();

  public inputToDo = '';

  @ViewChild('canvas') public canvas: ElementRef;
  public inputTextWidth;

  public onAdd(): void {
    this.inputTextWidth = this.canvas.nativeElement.getContext('2d').measureText(this.inputToDo);
    this.sendInputToDo.emit(this.todoService.onAdd(this.inputToDo, (this.inputTextWidth.width > 270)));
    this.inputToDo = '';
  }
}
