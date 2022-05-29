import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/rest-countries-response.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( { id } ) => this.countryService.getCountryByCode( id ))
        // tap( console.log )
      )      
      .subscribe( country => this.country = country );

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.countryService.getCountryByCode( id )
    //       .subscribe( country => {
    //         console.log( country );
    //       })

    //   })
  }

}
