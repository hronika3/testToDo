import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ElementModule} from '../element/element.module';
import {TodoService} from '../todo.service';


@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ElementModule
  ],
  providers: [TodoService]
})
export class ListModule {
}
