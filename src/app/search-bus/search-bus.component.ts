import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BusSearchService } from '../bus-search.service'
import { isNgTemplate } from '@angular/compiler';

export interface User {
  name: string;
  
}
let stationArray;





@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {



      

  

  constructor(private BusSearchService: BusSearchService){}
 
 


  myControl = new FormControl();
  options: string[] = stationArray;
  filteredOptions: Observable<string[]>;

  ngOnInit() {
   stationArray =  this.BusSearchService.getServers()
          .subscribe(
            (response)=> console.log(response), 
            (error)=> console.log(error),  
          );
            
     stationArray = JSON.stringify(stationArray.map(item =>item.title));

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}

  



   

