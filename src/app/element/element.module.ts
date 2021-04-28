import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementComponent} from './element.component';
import {OnlyNumbersPipe} from '../pipes/only-numbers.pipe';
import {FormsModule} from '@angular/forms';
import {CutTitleDirective} from '../directives/cut-title.directive';


@NgModule({
  declarations: [
    ElementComponent,
    CutTitleDirective,
    OnlyNumbersPipe
  ],
  exports: [
    ElementComponent,
    OnlyNumbersPipe
  ],
  imports: [
      CommonModule,
      FormsModule
  ]
})
export class ElementModule { }
