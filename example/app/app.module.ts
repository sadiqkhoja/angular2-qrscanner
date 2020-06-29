import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgQrScannerModuleTemp } from '../../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NgQrScannerModuleTemp,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
