import {AfterContentInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCutTitle]'
})
export class CutTitleDirective implements AfterContentInit {
  constructor(private host: ElementRef) {
  }

  public ngAfterContentInit(): void {
    const width = getComputedStyle(this.host.nativeElement);
    if (this.host.nativeElement.offsetWidth >= parseInt(width.maxWidth, 10)) {
      this.host.nativeElement.attributes.title.value = this.host.nativeElement.innerText;
    }
  }
}
