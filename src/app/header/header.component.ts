import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Text} from '../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public inputText = '';
  public textInfo: Text = {
    text: '',
    maxWidth: false
  };

  @Output() sendInputText: EventEmitter<Text> = new EventEmitter();

  @ViewChild('canvas') public canvas: ElementRef;
  public inputTextWidth;

  public add(): void {
    this.inputTextWidth = this.canvas.nativeElement.getContext('2d').measureText(this.inputText);
    const newText: Text = {
      text: this.inputText,
      maxWidth: (this.inputTextWidth.width > 270)
    };
    this.sendInputText.emit(newText);
  }
}
