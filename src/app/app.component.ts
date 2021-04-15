import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textList: Array<string> = [];

  public sendToList(inputText: string): void {
    this.textList.push(inputText);
    console.log(inputText.length);
  }
}
