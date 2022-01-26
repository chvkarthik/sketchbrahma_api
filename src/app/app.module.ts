import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppConfig, APP_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
  ],
  providers: [{provide: APP_CONFIG, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
