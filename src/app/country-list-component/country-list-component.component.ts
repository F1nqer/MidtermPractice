import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Countries, CountryDetailComponent} from '../country-detail-component/country-detail-component.component';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-list',
  template:
    '<button  mat-icon-button (click)="confirm">  <span class=\'fa fa-edit fa-lg\'>cpnfirm</span></button>' +
    '<input [(ngModel)]="countryName" (ngModelChange)="onNameChange($event)"/>' +
    '<input [(ngModel)]="MyCountries[checker].other"/>' +
    '<input [(ngModel)]="MyCountries[checker].square"/>',
  styles: ['']
})
export class CountryListComponent extends AppComponent{
  @Input() countryName: string;
  @Output() userNameChange = new EventEmitter<string>();
  // tslint:disable-next-line:typedef
  onNameChange(model: string){
    this.countryName = model;
    this.userNameChange.emit(model);
    this.MyCountries[this.checker].name = model;
  }

  // tslint:disable-next-line:typedef
  confirm(){

  }
}

