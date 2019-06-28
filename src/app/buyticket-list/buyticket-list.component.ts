import { Component, OnInit, Output } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BusSearchService } from '../bus-search.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BusFlightComponent } from '../bus-flight/bus-flight.component';


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
  styleUrls: ['./buyticket-list.component.css']
})
export class BuyticketListComponent implements OnInit {

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



   responseStations: any = 'privet';


  constructor(private BusSearchService: BusSearchService, private BuyTicketListService: BuyTicketListService) { }










  ngOnInit() {


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



  }

  displayFn(station?: StationUrlFrom): string | undefined {
    return station ? station.title : undefined;
  }


  private _filter(title: string): StationUrlFrom[] {
    const filterValue = title.toLowerCase();



    this.resultCityFrom = JSON.stringify(this.myControl.value.id);

    console.log(this.resultCityFrom, typeof this.resultCityFrom);

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
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
    console.log(this.events);
  }





  onSubmit() {
      
    let sendCityFrom = JSON.stringify(this.form.value.myControl.id);
    let sendCityTo = JSON.stringify(this.form.value.myControlTo.id);
    let sendDate = this.form.value.date;

    if (sendCityFrom !== sendCityTo) {
    this.BuyTicketListService.checkFlights(sendCityFrom, sendCityTo)
      .subscribe(
        (response) => {
          this.responseStations = response;
          console.log(this.responseStations);
        },
        (error) => console.log(error)


      );
    } else { alert('Ошибка: совпадают название станции отправления и станции прибытия') }
    console.log(`City From ${sendCityFrom}`, `City To ${sendCityTo}`, `Date ${sendDate}`);

  }


  showFlight() {
    this.show = true;
  }

}
