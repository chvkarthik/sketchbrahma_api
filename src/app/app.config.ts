import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
    BREWERIES : 'https://api.openbrewerydb.org/breweries',
    SEARCH_BREWERIES : 'https://api.openbrewerydb.org/breweries/search'
}