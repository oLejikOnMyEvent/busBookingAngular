import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {



  constructor(private http: HttpClient) { }

  localUrlScheldue = 'http://localhost:3000/Schedule';
  baseUrl = 'http://localhost:4200/schedule';


    getScheldue(){
          return this.http.get(this.localUrlScheldue);
    }

}
