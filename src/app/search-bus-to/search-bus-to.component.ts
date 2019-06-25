import { Component, OnInit } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { BusSearchService } from '../bus-search.service';
import { SearchBusToService } from './search-bus-to.service';
import { isNgTemplate } from '@angular/compiler';


export interface StationUrl {
  id: number;
  title: string;
}



@Component({
  selector: 'app-search-bus-to',
  templateUrl: './search-bus-to.component.html',
  styleUrls: ['./search-bus-to.component.css']
})





export class SearchBusToComponent implements OnInit {



  constructor(private BusSearchService: BusSearchService) { }


  myControl = new FormControl();

  options: StationUrl[];
  filteredOptions: Observable<StationUrl[]>;
  resultCityTo: string;
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
    this.resultCityTo = JSON.stringify(this.myControl.value.id);

    console.log(typeof this.resultCityTo, this.resultCityTo);


    console.log(this.myControl.value, 'second autocompliter');


    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);


  }

  getValue(){
    return this.resultCityTo;
  }

}
