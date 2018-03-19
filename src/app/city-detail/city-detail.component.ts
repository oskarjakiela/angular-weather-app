import { Component, Input, OnInit } from '@angular/core';
import { City } from './../city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
