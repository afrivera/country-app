import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {  Observable } from 'rxjs';
import { Country } from '../interfaces/rest-countries-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiKey: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  searchCountry( country: string ): Observable<Country []>{
    const url = `${this._apiKey}/name/${ country }`;
    return this.http.get<Country []>( url )
            // .pipe(
            //   catchError(err => of([]))
            // )
  }

  searchCapital( capital: string ): Observable <Country []>{
    const url = `${ this._apiKey}/capital/${ capital }`;

    return this.http.get< Country []>( url );
  }

  getCountryByCode ( id: string ): Observable <Country>{

    const url = `${ this._apiKey }/alpha/${ id }`;

    return this.http.get<Country>( url );

  }

}
