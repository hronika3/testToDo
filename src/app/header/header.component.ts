import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
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

  public inputToDo = '';

  @ViewChild('canvas') public canvas: ElementRef;
  public inputTextWidth;

  public addToList(): void {
    this.inputTextWidth = this.canvas.nativeElement.getContext('2d').measureText(this.inputToDo);
    this.todoService.addToList(this.inputToDo, this.inputTextWidth);
    this.inputToDo = '';
  }
}
