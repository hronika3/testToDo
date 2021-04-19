import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ElementComponent} from './element.component';


@NgModule({
  declarations: [
    ElementComponent
  ],
  exports: [
    ElementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementModule { }
