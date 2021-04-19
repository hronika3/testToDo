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

  @Output() sendInputText: EventEmitter<Text> = new EventEmitter();

  @ViewChild('canvas') public canvas: ElementRef;
  public inputTextWidth;

  public onAdd(): void {
    this.inputTextWidth = this.canvas.nativeElement.getContext('2d').measureText(this.inputText);
    this.sendInputText.emit({
      text: this.inputText,
      maxWidth: (this.inputTextWidth.width > 270)
    });
    this.inputText = '';
  }
}
