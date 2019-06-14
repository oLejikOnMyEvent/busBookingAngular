import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrService {


    regUrl = "http://192.168.2.11:8080/registration";
  constructor(private http: HttpClient  ) { }

      PostRegistrData(){
          
      }
}
