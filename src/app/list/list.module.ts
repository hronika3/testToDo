import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ElementModule} from '../element/element.module';
import {FilterToDoPipe} from '../pipes/filter-to-do.pipe';


@NgModule({
  declarations: [
    ListComponent,
    FilterToDoPipe
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
