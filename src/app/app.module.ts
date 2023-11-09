import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeModule } from './components/home/home.module';
import { TranslationModule } from './shared/modules/translation/translation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HomeModule,
    TranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
