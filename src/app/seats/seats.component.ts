import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, from } from 'rxjs';
import { BusSearchService } from '../bus-search.service';
import { type } from 'os';
import {SeatsService} from './seats.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatId: number;

  showAllSeats = true;
  numberOfSeats;
  @Input() seats: any;

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


  bookedFullSeats = [
    {
      id: 1,
      numberBooked: [
        { number: 1, isFree: true },
        { number: 2, isFree: true },
        { number: 3, isFree: true },
        { number: 4, isFree: false },
        { number: 5, isFree: true },
        { number: 6, isFree: true },
        { number: 0, isFree: true },
        { number: 8, isFree: false },
        { number: 9, isFree: true },
       
      ],
      bookedSeats: [
        1,
        4,
        5,
        9,
        10,
        12,
        14
      ]
    }
  ]

  bookingSeats: any;
  mass: any;
  allFreeSeats: any;

 
  private id: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private BusSearchService: BusSearchService, private SeatsService: SeatsService) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit() {

    this.numberOfSeats = this.bus[0].numberOfSeats;

    this.numberOfSeats = Array.from(Array(this.numberOfSeats), (x, i) => i + 1)

    console.log(this.bookedFullSeats[0].bookedSeats, 'booked seats', this.bookedFullSeats[0].numberBooked )



    //     let allSeats = [1,2,3,4,5,6,7,8,9];
    // let bookedSeats = [3,4,5];
    // let objFree = []
    // let objBooked = []

    // function creatObj(arr1, arr2, obj, obj2){
    //   (function (arr1,obj){
    //          for( let i in arr1)
    //               obj.push(arr1 = {i})

    //       for(let i in obj){
    //         obj[i].isFree = false
    //       }

    //   })(arr1,obj)


    // for(let i in arr2){
    //   Object.keys(obj) === arr2[i]

    // }
    //      return obj

    // }

    // creatObj(allSeats,bookedSeats,objFree, objBooked)



    let newArr = [];
    // this.bookedSeat.map(i => newArr.push(i.number));

    // this.freeNum = this.numberOfSeats.filter(value => -1 !== newArr.indexOf(value));

    this.bookedFullSeats.filter(n => n.numberBooked.map(i => newArr.push(i.number)))
    this.freeNum = newArr;

    console.log(this.SeatsService.showData, 'dataFrom seats component');

  }


  checkFreeSeat(n) {

  }



  numberOfPlace(n) {
    this.mass = n
  }

  BookingSeat() {

  }

showSeats(){
  if(this.showAllSeats){
    this.showAllSeats = false
  } else this.showAllSeats = true
 
}

}
