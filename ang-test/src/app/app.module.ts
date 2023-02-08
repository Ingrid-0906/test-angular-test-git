import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstComp } from './first-component/first-component.component';
import { ComponentCli } from './component-cli/component-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComp,
    ComponentCli
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
