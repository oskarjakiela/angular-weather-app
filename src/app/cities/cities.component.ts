import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CityService } from './../city.service';
import { City } from './../city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor(
    private router: Router,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
        .subscribe(cities => this.cities = cities);
  }

  getCityUrl(id): string {
    const url = `/cities/${id}`;

    if (this.router.isActive(url, true)) {
      return '/cities';
    }

    return url;
  }

}
