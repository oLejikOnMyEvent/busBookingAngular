import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BusSearchService } from '../bus-search.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatId: number;

  numberOfSeats;
  @Input() responseStations: any;

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
        { number: 1 },
        { number: 5 },
        { number: 9 },
        { number: 10 },
        { number: 12 },
        { number: 14 },
        { number: 4 },
        { number: 3 },
        { number: 2 }
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

  constructor(private activateRoute: ActivatedRoute, private BusSearchService: BusSearchService) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }


  ngOnInit() {

    this.numberOfSeats = this.bus[0].numberOfSeats;

    this.numberOfSeats = Array.from(Array(this.numberOfSeats), (x, i) => i + 1)

    console.log(this.bookedFullSeats[0].bookedSeats, 'booked seats')

  

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




    console.log(this.numberOfSeats);

    let newArr = [];
    // this.bookedSeat.map(i => newArr.push(i.number));

    // this.freeNum = this.numberOfSeats.filter(value => -1 !== newArr.indexOf(value));

    this.bookedFullSeats.filter(n => n.numberBooked.map(i => newArr.push(i.number)))
    this.freeNum = newArr;



  }


  numberOfPlace(n) {
    this.mass = n;
  }

  BookingSeat() {

  }



}
