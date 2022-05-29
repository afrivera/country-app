import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/rest-countries-response.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regions: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  activeRegion: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  getClassCss( region: string ): string {
    return ( region === this.activeRegion) ? 'btn btn-primary me-1' : 'btn btn-outline-primary me-1'
  }

  activateRegion( region: string ){

    if( region === this.activeRegion ){ return }
    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion( region )
      .subscribe( countries => this.countries = countries )

  }

}
