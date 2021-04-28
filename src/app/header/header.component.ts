import {ChangeDetectionStrategy, Component} from '@angular/core';
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
  public inputFilter = '';

  public filterOn = true;
  public filterButton = 'Фильтровать';

  public addToList(): void {
    this.todoService.addToList(this.inputToDo);
    this.inputToDo = '';
  }

  public filterList(): void {
    this.filterOn = !this.filterOn;
    if(!this.filterOn){
      this.filterButton = 'Сбросить';
    }
    else {
      this.filterButton = 'Фильтровать';
      this.inputFilter = '';
    }
    this.todoService.filterToDo(this.inputFilter);
  }
}
