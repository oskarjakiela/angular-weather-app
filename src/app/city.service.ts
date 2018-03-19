import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { City } from './city';
import { Forecast } from './forecast';
import { CITIES } from './mock-cities';

@Injectable()
export class CityService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private appId = 'db516796ef57e16d51eae40060b8b2ee';

  constructor(
    private http: HttpClient
  ) { }

  getCitiesUrl(): string {
    const ids = CITIES.map(city => city.id).join(',');
    return this.apiUrl + '/group?id=' + ids + '&units=metric&appid=' + this.appId;
  }

  getForecastUrl(id: number): string {
    return this.apiUrl + '/forecast?id=' + id + '&units=metric&appid=' + this.appId;
  }

  getCities(): Observable<City[]> {
    const url = this.getCitiesUrl();
    return this.http.get<any>(url).pipe(
      map(response => response.list.map(city => {
        const forecast = new Forecast(
          null,
          city.main.temp,
          city.wind.speed,
          city.weather[0].description
         );

        return new City(
          city.id,
          city.name,
          forecast
        );
      }))
    );
  }

  getForecasts(cityId: number): Observable<Forecast[]> {
    const url = this.getForecastUrl(cityId);
    return this.http.get<any>(url).pipe(
      map(response => response.list.map(forecast => {
        return new Forecast(
          forecast.dt,
          forecast.main.temp,
          forecast.wind.speed,
          forecast.weather[0].description
        );
      }))
    );
  }

}
