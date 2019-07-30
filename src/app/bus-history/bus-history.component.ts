import { Component, OnInit } from '@angular/core';
import {BuyTicketListService } from '../buyticket-list/buy-ticket-list.service'




@Component({
  selector: 'app-bus-history',
  templateUrl: './bus-history.component.html',
  styleUrls: ['./bus-history.component.css']
})


export class BusHistoryComponent implements OnInit {

   


    constructor(private BuyTicketListService: BuyTicketListService){}

    busHistoryList;
    ngOnInit(){
     this.BuyTicketListService.checkBusHistory()
        .subscribe(
          (res) => {
            console.log(res);
            this.busHistoryList = res
          },
          err => console.log(err)
          
        )
   
    }
}
