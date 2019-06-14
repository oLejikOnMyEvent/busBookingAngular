import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  username = "1@mail.ru"
  password 
  invalidLogin = false;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  hide = true;


  constructor(private router: Router,
    private loginservice: AuthService
    ) { }

  ngOnInit() {
  }


  checkLogin(){
    if(this.loginservice.auth(this.username, this.password)){
        this.router.navigate(['buyticket-list'])
        this.invalidLogin = false
    } else 
      this.invalidLogin = true
  }

}
