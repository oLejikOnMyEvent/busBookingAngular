import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './schedule.service';

export interface PeriodicElement {
  id: 1;
  flightFrom: string;
  flightTo: string;
  Time: string;
  Date: string;
  Price: number;
}



// const ELEMENT_DATA: PeriodicElement[] = [
//   // { id: 1, flightFrom: 'Кольчугино', flightTo: 'Дубна', Time: '07: 00', Date: '01.01.2018', Price: 1500 }
 
// ];





@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'flightFrom', 'flightTo', 'Time', 'Date', 'Price'];
  dataSource: string[];


  constructor(private ScheduleService: ScheduleService) { }

  ngOnInit() {
      this.ScheduleService.getScheldue()
      .subscribe((response: string[]) =>{
        this.dataSource = response;
        (error)=>(console.log(error))
      });
      
  }

}
