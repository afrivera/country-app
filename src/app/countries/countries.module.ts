import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorCountryComponent } from './pages/por-country/por-country.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';



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
    CommonModule
  ]
})
export class CountriesModule { }
