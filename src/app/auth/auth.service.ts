import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
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

 

  constructor(private http: HttpClient
    ) {

    
     }




 auth(username, password):Observable<any> {
      
      // let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
      // headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    
      // this.http.get('http://192.168.2.11:8080/login', {})
      // .subscribe(
      //       data => this.example = data.text(),
      //       err => this.logError(err.text()),
      //       () => console.log('Request Complete')
      //   );
    


    // console.log(username, typeof username);
    // console.log(password, typeof password);
    let headers = new HttpHeaders({Authorization: 'Basic ' +  btoa(username + ":" + password)})

    // const headerOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Basic ' + btoa(username + ':' + password)
    //   })
    // };


    // let head = new Headers();
    // head.append('Accept', 'application/json')
    // let base64 = btoa(username + ':' + password);
    // head.append("Authorization", "Basic " + base64);

    // let options = new RequestOptions()
    // options.head = head

    // let headerss = new FormData()
    // headerss.append("username", username),
    //   headerss.append("password", password)

    // const params = new HttpParams({
    //   fromObject: {
    //     username: username,
    //     password: password
    //   }
    // });



    //let head = new Headers({'access-control-allow-origin': '*'});
    // let options = new RequestOptions({})

    return this.http.post('http://localhost:4200/login', headers )
    .pipe(
      map(  userData => {

        if(userData) {
        sessionStorage.setItem('username', JSON.stringify(username));}
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