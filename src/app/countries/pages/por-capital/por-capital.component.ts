import { Component } from '@angular/core';
import { Country } from '../../interfaces/rest-countries-response.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  term: string = '';
  anError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService) { }

  searchBycapital( capital: string ){
    this.anError = false;
    this.term = capital;
    // console.log(this.term);

    this.countryService.searchCapital( this.term )
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
 

}
