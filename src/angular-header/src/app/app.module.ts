import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component.ts';

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular/' }],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export default class AppModule {}
