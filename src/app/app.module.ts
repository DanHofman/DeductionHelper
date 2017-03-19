import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EnterInfoComponent } from './enter-info/enter-info.component';
import { DisplayInfoComponent } from './display-info/display-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterInfoComponent,
    DisplayInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
