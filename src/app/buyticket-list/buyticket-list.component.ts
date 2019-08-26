import { Component, OnInit, Output } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BusSearchService } from '../bus-search.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BusFlightComponent } from '../bus-flight/bus-flight.component';

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';




import * as moment from 'moment';

export interface StationUrlFrom {
  id: number;
  title: string;
}

export interface StationUrlTo {
  id: number;
  title: string;
}


@Component({
  selector: 'app-buyticket-list',
  templateUrl: './buyticket-list.component.html',
  styleUrls: ['./buyticket-list.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class BuyticketListComponent implements OnInit {


  minDate = new Date();
  maxDate = new Date();

  isLoaded = false;

  events: string[] = [];

  show = false;

  myControl = new FormControl('');
  options: StationUrlFrom[];
  filteredOptions: Observable<StationUrlFrom[]>;

  myControlTo = new FormControl('');
  optionsTo: StationUrlTo[];
  filteredOptionsTo: Observable<StationUrlTo[]>;

  resultCityFrom: string;
  resultCityTo: string;



  form = new FormGroup({
    myControl: this.myControl,
    myControlTo: this.myControlTo,
    date: new FormControl(''),
  })



  responseStationsObj: any;
  responseError: any;


  constructor(private BusSearchService: BusSearchService, private BuyTicketListService: BuyTicketListService) { }



  ngOnInit() {

    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 14);

    this.BusSearchService.getServers()
      .subscribe(
        (response) => (
          this.options = response,
          this.filteredOptions = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.title),
              map(title => title ? this._filter(title) : this.options.slice()),
            )
        )
      );
    this.BusSearchService.getServers()
      .subscribe(
        (response) => (
          this.optionsTo = response,
          this.filteredOptionsTo = this.myControlTo.valueChanges
            .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.title),
              map(title => title ? this._filterTo(title) : this.optionsTo.slice())
            )
        )

      );


    this.isLoaded = true;
  }

  displayFn(station?: StationUrlFrom): string | undefined {
    return station ? station.title : undefined;
  }


  private _filter(title: string): StationUrlFrom[] {
    const filterValue = title.toLowerCase();



    this.resultCityFrom = JSON.stringify(this.myControl.value.id);



    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

  cityToClear() {
    this.myControlTo.reset({});

  }
  cityFromClear() {
    this.myControl.reset({});
  }
  displayFnTo(station?: StationUrlTo): string | undefined {
    return station ? station.title : undefined;
  }

  private _filterTo(title: string): StationUrlTo[] {
    const filterValueTo = title.toLowerCase();

    this.resultCityTo = JSON.stringify(this.myControlTo.value.id);
    console.log(typeof this.resultCityTo, this.resultCityTo);




    return this.optionsTo.filter(option => option.title.toLowerCase().indexOf(filterValueTo) === 0);


  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events, this.form.value.myControl.date);
  }



  showErr
  erorRecive

  onSubmit() {
    this.isLoaded = false;

    console.log('onSubmit')
  

// if(this.form.value.myControl.id!= null && this.form.value.myControlTo.id!= null){

 
  let sendCityFrom = JSON.stringify(this.form.value.myControl.id);
  let sendCityTo = JSON.stringify(this.form.value.myControlTo.id);
  let sendDate = this.form.value.date;
  sendDate = moment(sendDate).format("YYYY-MM-DD");
    if (sendCityFrom !== sendCityTo) {
        
      this.BuyTicketListService.checkFlights(sendCityFrom, sendCityTo, sendDate)
        .subscribe(
          (response) => {

            this.isLoaded = true,
              this.show = true,

              this.responseStationsObj = response;
            console.log(this.responseStationsObj, 'responseStationsObj');
            console.log(this.show, this.isLoaded);

          },
          (error) => {
            this.erorRecive = error.error,
              alert(this.erorRecive)
            this.isLoaded = true;
            if (this.show) { this.show = false }



          }


        );
    } else { alert('Ошибка: совпадают название станции отправления и станции прибытия'), this.form.reset(); this.isLoaded = true}
    console.log(`City From ${sendCityFrom}`, `City To ${sendCityTo}`, `Date ${sendDate}`);
  // } else { alert('Ошибка: вы не ввели название станций'), this.form.reset(); this.isLoaded = true}

  }



}
