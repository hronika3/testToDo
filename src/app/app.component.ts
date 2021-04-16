import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  textList: Array<string> = [];
  newList: Array<string> = [];

  public sendToList(inputText: string): void {
    this.textList.push(inputText);
    this.newList = this.textList.filter(item => item);
    this.textList = this.newList;
  }
}
