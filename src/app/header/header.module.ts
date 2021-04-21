import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {FormsModule} from '@angular/forms';
import {TodoService} from '../todo.service';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [TodoService]
})
export class HeaderModule {
}
