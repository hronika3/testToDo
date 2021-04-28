import {AfterContentInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCutTitle]'
})
export class CutTitleDirective implements AfterContentInit {
  constructor(private element: ElementRef) {
  }

  public ngAfterContentInit(): void {
    const elementStyle = getComputedStyle(this.element.nativeElement);
    if (this.element.nativeElement.offsetWidth >= parseInt(elementStyle.maxWidth, 10)) {
      this.element.nativeElement.attributes.title.value = this.element.nativeElement.innerText;
    }
  }
}
