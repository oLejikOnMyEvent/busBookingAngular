import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { User } from './User';

export class User {
  constructor(
    public status: string
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // User = {
  //   username: "rafa",
  //   password: "mendes"
  // }

  constructor(private http: HttpClient
  ) {


  }

  // authDate: any;



  auth(username1, password1) {


    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username1 + ':' + password1) });

    


    // const headers1 = new HttpHeaders({ Authorization: 'Basic ' + 'Z2c6MTIz'});
    // console.log(headers);



    return this.http.get<User>('http://localhost:4200/stations', { headers})
      .pipe(
        map(userData => {
          sessionStorage.setItem('username', username1);
          let authStr = 'Basic ' + btoa(username1 + ":" + password1);
          sessionStorage.setItem('basicauth', authStr)
          // console.log(userData, 'userdata');
          return userData;
        })
      
      )

  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null));
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}


// let username : string = 'username';
//       let password : string = 'password';
//       let headers = new Headers();
//       headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
//       headers.append("Content-Type", "application/x-www-form-urlencoded");
//       this.http.get('http://localhost:8888/api/', {
//         headers: headers
//       }).subscribe(
//             data => this.example = data.text(),
//             err => this.logError(err.text()),
//             () => console.log('Request Complete')
//         );
//     console.log(this.example);