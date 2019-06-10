import { Component } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  flight: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', time:'07:00', weight: 1.0079, flight: 'H'},
  {position: 2, name: 'Helium',time:'07:00', weight: 4.0026, flight: 'He'},
  {position: 3, name: 'Lithium',time:'07:00', weight: 6.941, flight: 'Li'},
  {position: 4, name: 'Beryllium',time:'07:00', weight: 9.0122, flight: 'Be'},
  {position: 5, name: 'Boron',time:'07:00', weight: 10.811, flight: 'B'},
  {position: 6, name: 'Carbon',time:'07:00', weight: 12.0107, flight: 'C'},
  {position: 7, name: 'Nitrogen',time:'07:00', weight: 14.0067, flight: 'N'},
  {position: 8, name: 'Oxygen', time:'07:00',weight: 15.9994, flight: 'O'},
  {position: 9, name: 'Fluorine',time:'07:00', weight: 18.9984, flight: 'F'},
  {position: 10, name: 'Neon', time:'07:00', weight: 20.1797, flight: 'Ne'},
];


@Component({
  selector: 'app-bus-history',
  templateUrl: './bus-history.component.html',
  styleUrls: ['./bus-history.component.css']
})


export class BusHistoryComponent {

    displayedColumns: string[] = ['position', 'name', 'time', 'weight', 'flight'];
    dataSource = ELEMENT_DATA;

}
