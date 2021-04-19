import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Text} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public textList: Array<Text> = [];
  public newList: Array<Text> = [];

  public sendToList(inputText: Text): void {
    this.textList.push(inputText);
    this.newList = this.textList.filter(item => item);
    this.textList = this.newList;
  }
}
