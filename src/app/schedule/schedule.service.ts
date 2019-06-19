import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {



  constructor(private http: HttpClient) { }

  ulrScheldue = 'http://localhost:3000/Schedule';

    getScheldue(){
          return this.http.get(this.ulrScheldue);
    }

}
