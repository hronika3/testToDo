import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Text} from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() textList: Array<Text>;

  public deleteEl(indexEl: number): void {
    this.textList.splice(indexEl, 1);
  }
}
