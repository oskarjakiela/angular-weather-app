import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from './../city';
import { Forecast } from './../forecast';
import { CityService } from './../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City;
  displayedColumns: string[];
  forecasts: Forecast[];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {
    this.displayedColumns = ['datetime', 'weatherDescription', 'mainTemp', 'windSpeed'];
  }

  ngOnInit() {
    this.getCity();
    this.getForecasts();
  }

  getCity(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = Number(params.get('id'));
        this.cityService.getCity(id)
          .subscribe(city => this.city = city);
      });
  }

  getForecasts(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = Number(params.get('id'));
        this.cityService.getForecasts(id)
          .subscribe(forecasts => this.forecasts = forecasts);
      });
  }

}
