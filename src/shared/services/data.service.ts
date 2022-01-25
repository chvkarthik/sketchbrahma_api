import { Injectable, Injector } from '@angular/core';
import { APP_CONFIG } from 'src/app/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  config:any;

  constructor(public injector:Injector,
              public httpClient: HttpClient) {
    this.config = injector.get(APP_CONFIG)
   }

   getBreweries(){
     return this.httpClient.get(this.config.BREWERIES);
   }
}
