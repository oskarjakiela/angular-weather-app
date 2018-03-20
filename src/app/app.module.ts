import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityService } from './city.service';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { IconThermometerComponent } from './icon-thermometer/icon-thermometer.component';
import { IconWindComponent } from './icon-wind/icon-wind.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    IconThermometerComponent,
    IconWindComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
