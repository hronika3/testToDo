import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Text} from '../interfaces';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  constructor(private todoService: TodoService) {}

  @Input() textList: Array<Text>;

  public removeByIndex(indexEl: number): void {
    this.todoService.removeByIndex(this.textList, indexEl);
  }
}
