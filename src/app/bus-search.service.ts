import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BusSearchService {


  stationUrl = 'http://192.168.2.220:8080/api/stations';
  localStationUrl: 'http://localhost:3000/routeFlight';

  constructor(private http: HttpClient) { }


  getServers() {
  //return of([{ id: 1, title: 'Москва' }, { id: 2, title: 'Махачкала' }]);
  // return this.http.get<{ id: number; title: string; }[]>(this.localStationUrl);
  return this.http.get<{ id: number; title: string; }[]>(this.stationUrl);

  }
}

