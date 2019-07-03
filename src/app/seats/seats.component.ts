import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatId: number;

  numberOfSeats: number = 20;
  @Input() seats: any;

  nums: any;

  constructor() {

  }



  ngOnInit() {
    this.nums = Array.from(Array(this.numberOfSeats), (x, i) => i+1)
  }

  numberOfPlace(arg){
      console.log(arg)
  }
  
}
