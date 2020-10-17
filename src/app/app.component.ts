import { Component } from '@angular/core';
import {Countries, CountryDetailComponent} from './country-detail-component/country-detail-component.component';
import {CountryListComponent} from './country-list-component/country-list-component.component';

@Component({
  selector: 'app-main',
  template: '<button (click)="view(0)"><img [src]="MyCountries[0].imageurl"></button>' +
    '<button mat-button  (click)="view(1)"><<img [src]="MyCountries[1].imageurl"></button>' +
    '<button mat-button (click)="view(2)"><img [src]="MyCountries[2].imageurl"></button>' +
    '<button mat-button  (click)="view(3)"><img [src]="MyCountries[3].imageurl"></button>' +
    '<button mat-button (click)="view(4)"><img [src]="MyCountries[4].imageurl"></button>' +
    '<div id="viewer"><p>Название: {{this.MyCountries[checker].name}}</p>' +
    '<p>Площадь: {{this.MyCountries[checker].square}}</p>' +
    '<p>Дополнительно: {{this.MyCountries[checker].other}}</p></div>' +
    '<app-list [(countryName)]="MyCountries[checker].name"></app-list>',
  styles:  ['']
})

export class AppComponent{
  MyCountries: Countries[] = [
    new Countries('Andorra', 10000, 'country 1', './assets/images/andorra.gif'),
    new Countries('Argentina', 10000, 'country 2', './assets/images/argentina.gif'),
    new Countries('Benin', 10000, 'country 3', './assets/images/benin.gif'),
    new Countries('Brazilya', 10000, 'country 4', './assets/images/braziliya.gif'),
    new Countries('Vyetnam', 10000, 'country 5', './assets/images/vyetnam.gif')];
  checker = 2;
  // tslint:disable-next-line:typedef
  view(check: number){
    this.checker = check;
    return this.checker;
  }
}
