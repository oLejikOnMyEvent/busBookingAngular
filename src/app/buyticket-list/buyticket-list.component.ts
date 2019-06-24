import { Component, OnInit } from '@angular/core';
import { BuyTicketListService } from './buy-ticket-list.service';
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-buyticket-list',
  templateUrl: './buyticket-list.component.html',
  styleUrls: ['./buyticket-list.component.css']
})
export class BuyticketListComponent implements OnInit {

  form: FormGroup;

  show = false;

  constructor(private BuyTicketListService: BuyTicketListService) { }


  showFlight() {
    this.show = true;
  }


  


  ngOnInit() {

    this.form = new FormGroup({
      cityFrom: new FormControl(''),
      cityTo: new FormControl(''),
      date: new FormControl('')
    })

    
  }

  onSubmit(){
    console.log('submit form', this.form);
    
  }

    // checkFlight(){
    //  this.BuyTicketListService.checkFlights() 
    //       .subscribe()
    // }
 
}
