import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';
import { ColorDirectiveTsDirective } from './exercice-1/color.directive.ts.directive';


@NgModule({
  declarations: [
    AppComponent,
    Exercice1Component,
    ColorDirectiveTsDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
