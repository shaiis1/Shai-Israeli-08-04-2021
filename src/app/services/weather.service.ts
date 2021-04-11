import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherAPIKey = environment.weatherAPIKey;
  private apiDaily = environment.apiDaily;
  private apiAutocomplete = environment.apiAutocomplete;
  private apiForecast = environment.apiForecast;
  private apiGeoLocation = environment.apiGeoLocation;

  constructor(private http: HttpClient) { }

  getAutocompleteSearch(searchedQuery) {
    return this.http.get(`${this.apiAutocomplete}?apikey=${this.weatherAPIKey}&q=${searchedQuery}`);
  }

  getDailyWeather(fetchedCityIndex) {
    return this.http.get(`${this.apiDaily}/${fetchedCityIndex}?apikey=${this.weatherAPIKey}`);
  }

  getForecastWeather(fetchedCityIndex) {
    return this.http.get(`${this.apiForecast}/${fetchedCityIndex}?apikey=${this.weatherAPIKey}&metric=true`);
  }

  getGeolocation(latitude, longitude) {
    return this.http.get(`${this.apiGeoLocation}?apikey=${this.weatherAPIKey}&q=${latitude},${longitude}&toplevel=true`);
  }

}