import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  template: '<div></div>',
  styles: ['']
})
export class CountryDetailComponent {
  Country: Countries;
}
export class Countries{
  name: string;
  square: number;
  other: string;
  imageurl: string;

  constructor(name: string, square: number, other: string, imageurl: string) {
    this.name = name;
    this.square = square;
    this.other = other;
    this.imageurl = imageurl;
  }
}


