import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {User } from './User';

// export class User {
//   constructor(
//     public status: string
//   ) { }
// }


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  User = {
    username : "rafa",
    password : "mendes"
  }

  constructor(private http: HttpClient
    ) {

    
     }




 auth(username1, password1) {
      
   
    const params = new HttpHeaders({Authorization: 'Basic ' +  btoa(username1 + ":" + password1)})
    

    //  let headNew = new HttpHeaders(btoa(username1 + ":" + password1))


    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/x-www-form-urlencoded',
    //     'Authorization': 'Basic' + btoa(username1 + ":" + password1)
    //   })
    // };

    // let User ={
    //   username: "rafa",
    //   password: "mendes"
    // }
    
    //let head = new Headers({'access-control-allow-origin': '*'});
    // let options = new RequestOptions({})
  
    //  console.log(this.http.post('http://192.168.2.11:8080/login', User, httpOptions),httpOptions );

    //  const params = new HttpParams({
    //   fromObject: {
    //     username: username1,
    //     password: password1
    //   }
    // });

    return this.http.get('http://localhost:4200/login', {params})
    .pipe(
      map(  userData => {
     let authStr = 'Basic ' +  btoa(username1 + ":" + password1);
     sessionStorage.setItem('basicauth', authStr)
        return userData;
      })
    )
   
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null));
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