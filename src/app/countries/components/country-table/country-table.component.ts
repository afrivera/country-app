import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/rest-countries-response.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html'
})
export class CountryTableComponent {

  @Input() countries: Country[] = [];

  constructor() { }

  

}
