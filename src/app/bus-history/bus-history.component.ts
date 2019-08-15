import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from '../buyticket-list/buy-ticket-list.service'
import { empty } from 'rxjs';




@Component({
  selector: 'app-bus-history',
  templateUrl: './bus-history.component.html',
  styleUrls: ['./bus-history.component.css']
})


export class BusHistoryComponent implements OnInit {




  constructor(private BuyTicketListService: BuyTicketListService) { }

  username;
  busHistoryList;

  isLoaded = false

  empty = false;
  ngOnInit() {
    this.isLoaded = false
    this.BuyTicketListService.checkBusHistory()
      .subscribe(
        (res) => {
          

            this.busHistoryList = res
          
          this.isLoaded = true;

        },
        err => console.log(err)

      )

    this.username = sessionStorage.getItem('username');
    console.log(this.username);
  }
}
