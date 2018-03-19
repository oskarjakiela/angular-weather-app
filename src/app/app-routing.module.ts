import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities/cities.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  {
    path: 'cities',
    component: CitiesComponent,
    children: [
      { path: ':id', component: CityDetailComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
