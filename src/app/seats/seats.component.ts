import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatId: number;

  numberOfSeats;
  @Input() seats: any;

  nums: any;

  seat = [{
    number: 1,
    isFree: false,
  },
  {
    number: 3,
    isFree: false,
  },
  {
    number: 4,
    isFree: false,
  },
  {
    number: 5,
    isFree: false,
  },
  ]


  bookedSeat = [{
    number: 9,
  },
  {
    number: 3,
  },
  {
    number: 6,
  },
  {
    number: 5,
  },
  {
    number: 10,
  },
  {
    number: 14,
  },
  ]

  freeNum: any;
  bus = [{
    id: 1,
    numberOfSeats: 20,
  },
  {
    id: 2,
    numberOfSeats: 25,
  }
  ]


  bookingSeats: any;
  mass: any;
  allFreeSeats: any;
  private id: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }



  ngOnInit() {
    this.numberOfSeats = this.bus[0].numberOfSeats;

    this.numberOfSeats = Array.from(Array(this.numberOfSeats), (x, i) => i + 1)

    console.log(this.numberOfSeats);

    let NewArr = []
    for (let i in this.bookedSeat) {
      NewArr.push(this.bookedSeat[i].number)
    }
    // this.freeNum = [...NewArr];

   this.freeNum =  this.numberOfSeats.filter(value => -1 !== NewArr.indexOf(value))
    
   console.log(this.numberOfSeats.filter(value => -1 !== NewArr.indexOf(value)))
   console.log(this.bus[0].numberOfSeats - this.freeNum.length)

  }


  numberOfPlace(n) {
    console.log(n);
  }

  BookingSeat() {

  }



}
