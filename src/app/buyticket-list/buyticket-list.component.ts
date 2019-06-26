import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BusSearchService } from '../bus-search.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


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
  form: FormGroup;

  show = false;

  constructor(private BusSearchService: BusSearchService) { }


  myControl = new FormControl();
  options: StationUrlFrom[];
  filteredOptions: Observable<StationUrlFrom[]>;

  myControlTo = new FormControl();
  optionsTo: StationUrlTo[];
  filteredOptionsTo: Observable<StationUrlTo[]>;

  resultCityFrom: string;
  reultCityTo: string;





  showFlight() {
    this.show = true;
  }




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

    this. reultCityTo = JSON.stringify(this.myControlTo.value.id);
    console.log(typeof this. reultCityTo, this. reultCityTo);




    return this.optionsTo.filter(option => option.title.toLowerCase().indexOf(filterValueTo) === 0);


  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    console.log(this.events);
  }

;

  onSubmit() {
    console.log('submit form', this.form);

  }



  //   checkFlight(cityTo, cityFrom) {
  //   this.BuyTicketListService.checkFlights(cityTo, cityFrom)
  //     .subscribe(
  //       (response) => console.log(response),
  //       (error) => console.log(error)
  //     )
  // }

}
