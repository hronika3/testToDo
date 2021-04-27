import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {ListModule} from './list/list.module';
import {TodoService} from './todo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ListModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [TodoService]
})
export class AppModule {
}
