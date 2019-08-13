import { Component, OnInit } from '@angular/core';
import { Subscription, from, Subscribable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import {CheckoutService} from '../service/checkout.service'
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   seat:number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', seat: 10},
 
// ];

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'seat'];
  // dataSource = ELEMENT_DATA;

  private bookingid: number
 private id: number;
 private cityFrom: string;
 private cityTo: string;
 private dateArrival: string;
 private  dateDeparture :string;
 private price: number;
 private  seat: number;
  // private subscription: Subscription;
  // private cityFrom: Subscription;
  // private cityTo: Subscription;

    private bookingidCheck: Subscription;
  private idCheck: Subscription;
  private cityFromCheck: Subscription;
  private cityToCheck: Subscription;
  private dateArrivalCheck: Subscription;
  private  dateDepartureCheck :Subscription;
  private priceCheck: Subscription;
  private  seatCheck: Subscription

  constructor(private activateRoute: ActivatedRoute, private CheckoutService: CheckoutService) { 

    this.bookingidCheck = activateRoute.params.subscribe(params => this.bookingid = params['bookingid']);
    this.idCheck = activateRoute.params.subscribe(params => this.id = params['id']);
  this.cityFromCheck = activateRoute.params.subscribe(params => this.cityFrom = params['cityFrom']);
  this.cityToCheck = activateRoute.params.subscribe(params => this.cityTo = params['cityTo']);
  this.dateArrivalCheck = activateRoute.params.subscribe(params => this.dateArrival = params['dateArrival']);
  this.dateDepartureCheck  = activateRoute.params.subscribe(params => this.dateDeparture = params['dateDeparture']);
  this.priceCheck = activateRoute.params.subscribe(params => this.price = params['price']); 
  this.seatCheck = activateRoute.params.subscribe(params => this.seat = params['seat']);
  
  }



  ngOnInit() {
  }

  pay(){
    alert('Вы купили билет')
  }

  cancel(){
      this.CheckoutService.deleteTrip(this.bookingid)
      .subscribe(
        res=> console.log(res),
        err => console.log(err)     
      )
      
    alert('Вы отменили бронирование')
  }
}
