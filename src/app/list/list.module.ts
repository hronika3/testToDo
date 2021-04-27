import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ElementModule} from '../element/element.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ElementModule
  ]
})
export class ListModule {
}
