import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/rest-countries-response.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-country',
  templateUrl: './por-country.component.html',
  styles: [
  ]
})
export class PorCountryComponent {

  term: string = '';
  anError: boolean = false;
  countries: Country[] = [];
  countriesSuggestions: Country[] = [];

  showSuggestion: boolean = false;

  constructor( private countryService: CountryService) { }

  search( country: string ){
    this.anError = false;
    this.term = country;
    // console.log(this.term);

    this.countryService.searchCountry( this.term )
      // .subscribe( (resp) => {
      //   console.log(resp);
      // }, (err)=> {
      //   console.info(err );
      // })
      .subscribe({
        next: ( res )=> {
          this.countries =  res;
          // console.log(res)
        },
        error: (err)=> {
          this.anError = true;
          this.countries = [];
        }
      })

  }

  suggestions( suggestion: string ){
    this.anError = false;
    this.term = suggestion;
    this.showSuggestion = true;

    this.countryService.searchCountry( suggestion )
      .subscribe( countries => this.countriesSuggestions = countries.splice( 0, 5 ) )
    
  }

  searchSuggestion( suggestion: string){

    this.search( suggestion );
    
  }


}
