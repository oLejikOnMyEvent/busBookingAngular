import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusSearchService } from '../bus-search.service';
import { SearchBusToService } from './search-bus-to.service';





@Component({
  selector: 'app-search-bus-to',
  templateUrl: './search-bus-to.component.html',
  styleUrls: ['./search-bus-to.component.css']
})





export class SearchBusToComponent implements OnInit {

  constructor(private BusSearchService: BusSearchService, private SearchBusToService: SearchBusToService ) { }


  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  cityTo: string[];

  ngOnInit() {
    this.BusSearchService.getServers()
      .subscribe(
        (response) => {
          this.options = response.map(item => item.title);

          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
        },
        (error) => console.log(error)
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    this.cityTo = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);


    console.log(this.myControl.value);



    return this.cityTo;
  }
}
