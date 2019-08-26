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
  check;
  ngOnInit() {
    this.isLoaded = false
    this.BuyTicketListService.checkBusHistory()
      .subscribe(
        (res) => {

          let check;
          this.busHistoryList = res

          this.check =  this.busHistoryList.map(item => item.bookingDate)

   this.check = this.check.sort();

            console.log(this.check);
            
          this.isLoaded = true;

        },
        err => console.log(err)

      )

    this.username = sessionStorage.getItem('username');
    console.log(this.username);
  }


  // sortingBy(filed: any) {
  //   this.busHistoryList.sort((a: any, b: any) => {
  //     if (a[filed] < b[filed]) {
  //       return -1;
  //     } else if (a[filed] > b[filed]) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   this.busHistoryList = this.busHistoryList;
  // }
}
