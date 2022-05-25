import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PorCountryComponent } from './countries/pages/por-country/por-country.component';
import { PorRegionComponent } from './countries/pages/por-region/por-region.component';
import { PorCapitalComponent } from './countries/pages/por-capital/por-capital.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path: '',
        component: PorCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]    
})
export class AppRoutingModule {}