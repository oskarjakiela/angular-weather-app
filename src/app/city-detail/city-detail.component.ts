import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from './../forecast';
import { CityService } from './../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  forecasts: Forecast[];

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    this.getForecasts();
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
