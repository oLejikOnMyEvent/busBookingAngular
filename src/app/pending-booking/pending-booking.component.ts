import { Component, OnInit } from '@angular/core';
import { PendingBookingService } from '../service/pending-booking.service'

@Component({
  selector: 'app-pending-booking',
  templateUrl: './pending-booking.component.html',
  styleUrls: ['./pending-booking.component.css']
})
export class PendingBookingComponent implements OnInit {

  constructor(private PendingBookingService: PendingBookingService) { }

allPendingPayBooking;
payed: false;
  ngOnInit() {
    this.PendingBookingService.checkPending()
      .subscribe(
            res => {
              this.allPendingPayBooking = res
              console.log(this.allPendingPayBooking);     
            },
            err => console.log(err)
            
      )


  }

  payPending(item){
      this.PendingBookingService.payPending(item)
      .subscribe(
        res => console.log(res),
        err => console.log(err),  
      )
      alert(`Вы Заплатили за билет`)

    }


      cancelPending(item){
        this.PendingBookingService.deletePending(item)
            .subscribe(
              res => console.log(res),
              err => console.log(err)
            )
       
      alert(`Вы отменили бронь`)
      this.ngOnInit()
      }
      
 

}
