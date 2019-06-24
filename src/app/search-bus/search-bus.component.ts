import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  // options: StationUrl[] = [
  //   { id: 1, title: 'Москва' },
  //   { id: 2, title: 'Махачкала' },
  //   { id: 3, title: 'Воронеж' }
  // ];
   options: StationUrl[] ;
  filteredOptions: Observable<StationUrl[]>;

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
    

    return this.options.filter(option => option.title.toLowerCase().indexOf(filterValue) === 0);
  }

}
