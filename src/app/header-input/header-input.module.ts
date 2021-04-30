import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HeaderInputComponent} from './header-input.component';


@NgModule({
  declarations: [
    HeaderInputComponent
  ],
  exports: [
    HeaderInputComponent
  ],
  imports: [
    FormsModule
  ]
})

export class HeaderInputModule {
}
