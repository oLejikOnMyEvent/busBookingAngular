import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-buyticket-list',
  template: `
  <form (ngSubmit)="submitForm()" #form="ngForm">
  <mat-card class="CardSearch">
git 

  <mat-grid-list cols="4" rowHeight="2:1">
      <mat-grid-tile>     <app-search-bus> </app-search-bus> 
        <button mat-button class="refreshButton">
            <mat-icon>cached</mat-icon>
        </button> </mat-grid-tile>
      <mat-grid-tile>   <app-search-bus-to></app-search-bus-to>
      </mat-grid-tile>
      <mat-grid-tile>  <app-datapicker></app-datapicker>
        <button mat-flat-button color="primary" class="ShowButton" (click)="(showFlight()); (showData())">Показать</button>
        <button mat-flat-button color="warn" class="checkButton" style="margin-left:20px;" type="submit"> Check </button>
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


submitForm(form: HTMLFormElement){
console.log("form submited", from);


}
  ngOnInit() {


   
  }

}
