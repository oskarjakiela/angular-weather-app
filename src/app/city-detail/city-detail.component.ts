import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from './../city';
import { CityService } from './../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  city: City;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService
  ) {
  }

  ngOnInit() {
    this.getCity();
  }

  getCity(): void {
    this.route.paramMap
      .subscribe((params) => {
        const id = Number(params.get('id'));
        this.cityService.getCity(id)
          .subscribe(city => this.city = city);
      });
  }

}
