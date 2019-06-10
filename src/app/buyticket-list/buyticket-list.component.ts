import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyticket-list',
  template: `
    <p>
     
        <mat-card class="CardSearch">


        <mat-grid-list cols="4" rowHeight="2:1">
            <mat-grid-tile>     <app-search-bus> </app-search-bus> 
              <button mat-button class="refreshButton">
                  <mat-icon>cached</mat-icon>
              </button> </mat-grid-tile>
            <mat-grid-tile>   <app-search-bus-to></app-search-bus-to>
            </mat-grid-tile>
            <mat-grid-tile>  <app-datapicker></app-datapicker>
              <button mat-flat-button color="primary" class="ShowButton">Показать</button>
            </mat-grid-tile>
           
          </mat-grid-list>
          
        </mat-card>

        <app-bus-flight> </app-bus-flight>
    </p>
  `,
  styles: []
})
export class BuyticketListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
