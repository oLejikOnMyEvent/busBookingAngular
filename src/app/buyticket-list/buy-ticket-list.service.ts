import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  urlFlight = 'http://localhost:3000/flight'

  constructor(private http: HttpClient) { }


  postData() {

  }

  checkFlights(cityFrom, cityTo, date) {
    const dataObj = {
      cityFrom,
      cityTo,
      date
    }
  return this.http.post(this.urlFlight, dataObj)
  }
}
