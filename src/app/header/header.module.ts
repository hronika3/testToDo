import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {FormsModule} from '@angular/forms';
import {HeaderInputModule} from '../header-input/header-input.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    FormsModule,
    HeaderInputModule
  ]
})

export class HeaderModule {
}
