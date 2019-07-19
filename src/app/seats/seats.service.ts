import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  showData:any;
  constructor(private http: HttpClient) { }


  localUrl = ''
  stableUrl = '';

getFreeSeats(NumberOf){
  // return this.http.delete(http://localhost:3000/bookedFullSeats/);
}


getDataSeats(data){
  return this.showData = data
}

}
