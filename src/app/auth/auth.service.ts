import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  auth(username, password){
      if( username === "1@mail.ru" && password == "1"){
          sessionStorage.setItem('username', username)
          return true;
      } else {
          return false
      }
  }       

  isUserLoggedIn(){
      let user = sessionStorage.getItem('username')
  
      return !(user === null)
  }

  logOut(){
      sessionStorage.removeItem('username');
  }
}
