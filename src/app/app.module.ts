import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ListModule } from './list/list.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        ListModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
