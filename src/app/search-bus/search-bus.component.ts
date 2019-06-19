import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BusSearchService } from '../bus-search.service';









@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {


  constructor(private BusSearchService: BusSearchService) {

  }

  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;
  cityFrom: string[];

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

    this.cityFrom = this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);



    console.log(this.myControl.value);
    return this.cityFrom;

  }


}
