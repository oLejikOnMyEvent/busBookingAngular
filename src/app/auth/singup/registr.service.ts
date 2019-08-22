import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrService {


  regUrl = "http://192.168.2.220:8080/api/registration";
  constructor(private http: HttpClient) { }

  addUser(username: string, fullname: string, password: string) {
    let data = {
      "username" : username,
      "password": password,
      "fullname": fullname
    }

    return this.http.post(this.regUrl, data)

    // return of(console.log(data))
  }
}
