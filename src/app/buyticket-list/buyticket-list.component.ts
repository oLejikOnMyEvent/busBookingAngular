import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';

@Component({
  selector: 'app-buyticket-list',
  template: `
  <form #form="ngForm">
  <mat-card class="CardSearch">


  <mat-grid-list cols="4" rowHeight="2:1">
      <mat-grid-tile>     <app-search-bus> </app-search-bus> 
        <button mat-button class="refreshButton">
            <mat-icon>cached</mat-icon>
        </button> </mat-grid-tile>
      <mat-grid-tile>   <app-search-bus-to></app-search-bus-to>
      </mat-grid-tile>
      <mat-grid-tile>  <app-datapicker></app-datapicker>
        <button mat-flat-button color="primary" class="ShowButton" (click)="(showFlight()); (showData())">Показать</button>
      </mat-grid-tile>
     
    </mat-grid-list>
    
  </mat-card>
  </form>

  <app-bus-flight *ngIf="show"> </app-bus-flight>
  <app-bus-flight *ngIf="show"> </app-bus-flight>
  
`,
  styles: ['./buyticket-list.component.css']
})
export class BuyticketListComponent implements OnInit {


  cityTo: string;
  cityFrom: string;
  date: any;
 show = false;

  constructor(private BuyTicketListService: BuyTicketListService) { }


  showFlight(){
    this.show = true;
  }

showData(){
  console.log(this.cityTo);
  console.log(this.cityFrom);
  console.log(this.date);
  
  
  
}
  ngOnInit() {


   
  }

}
