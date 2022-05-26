import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorCountryComponent } from './pages/por-country/por-country.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorCountryComponent,
    PorRegionComponent,
    SeeCountryComponent
  ],
  exports:[
    PorCapitalComponent,
    PorCountryComponent,
    PorRegionComponent,
    SeeCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
