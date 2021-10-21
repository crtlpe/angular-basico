import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContadorComponent } from './contador/contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent  ,
    ContadorComponent
    
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
