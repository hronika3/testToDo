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
  public inputToDo: string = '';

  public inputFilter: string = '';
  public filterOn: boolean = false;
  public filterButton: string = 'Фильтровать';

  public addToList(inputToDo: string): void {
    this.todoService.addToList(inputToDo);
    this.inputToDo = '';
  }

  public filterList(inputFilter): void {
    this.filterOn = !this.filterOn;
    if(this.filterOn){
      this.filterButton = 'Сбросить';
    }
    else {
      this.filterButton = 'Фильтровать';
      this.inputFilter = '';
    }
    this.todoService.filterToDo(inputFilter);
  }
}
