import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {



  constructor(private http: HttpClient) { }

  localUrlScheldue = 'http://localhost:3000/Schedule';
  baseUrl = 'http://192.168.2.11:8080/schedule';


    getScheldue(){
          return this.http.get(this.localUrlScheldue);
    }

}
