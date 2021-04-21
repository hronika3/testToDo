import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementComponent} from './element.component';
import {OnlyNumbersPipe} from '../pipes/only-numbers.pipe';


@NgModule({
  declarations: [
    ElementComponent,
    OnlyNumbersPipe
  ],
  exports: [
    ElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementModule { }
