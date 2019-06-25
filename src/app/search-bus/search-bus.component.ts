import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusSearchService } from '../bus-search.service';
import { isNgTemplate } from '@angular/compiler';




export interface StationUrl {
  id: number;
  title: string;
}



@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})


export class SearchBusComponent implements OnInit {


  constructor(private BusSearchService: BusSearchService) { }


  myControl = new FormControl();

  options: StationUrl[];
  filteredOptions: Observable<StationUrl[]>;
  resultCityFrom: string;

  ngOnInit() {
    this.BusSearchService.getServers()
      .subscribe(
        (response) => (
          this.options = response,
          this.filteredOptions = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.title),
              map(title => title ? this._filter(title) : this.options.slice())
            )
        )
      );
  }




  displayFn(station?: StationUrl): string | undefined {
    return station ? station.title : undefined;
  }

  private _filter(title: string): StationUrl[] {
    const filterValue = title.toLowerCase();


    this.resultCityFrom = JSON.stringify(this.myControl.value.id);

    console.log(this.resultCityFrom, typeof this.resultCityFrom);

    console.log(this.myControl.value, 'first autocompliter');
    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

}
