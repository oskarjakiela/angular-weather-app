import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityService } from './city.service';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
