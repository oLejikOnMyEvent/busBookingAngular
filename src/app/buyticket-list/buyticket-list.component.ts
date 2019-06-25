import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { BusSearchService } from '../bus-search.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


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

  form: FormGroup;

  show = false;


  From: string;
  constructor(private BusSearchService: BusSearchService) { }


  myControl = new FormControl();
  myControl1 = new FormControl();
  options: StationUrlFrom[];
   options1: StationUrlTo[];
  filteredOptions: Observable<StationUrlFrom[]>;
   filteredOptions1: Observable<StationUrlTo[]>;
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
              .subscribe(
                (response) => (
                  this.options1 = response,
                  this.filteredOptions1 = this.myControl1.valueChanges
                    .pipe(
                      startWith(''),
                      map(value => typeof value === 'string' ? value : value.title),
                      map(title => title ? this._filter(title) : this.options1.slice()),
                    )
                )
              )

      );
  }

  displayFn(station?: StationUrlFrom): string | undefined {
    return station ? station.title : undefined;
  }

  displayFn1(station?: StationUrlTo): string | undefined {
    return station ? station.title : undefined;
  }
  private _filter(title: string, title1: string): StationUrlFrom[] {
    const filterValue = title.toLowerCase();
    const filterValue1 = title.toLowerCase();


    this.resultCityFrom = JSON.stringify(this.myControl.value.id);

    console.log(this.resultCityFrom, typeof this.resultCityFrom);

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

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
