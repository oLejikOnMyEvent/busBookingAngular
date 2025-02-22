import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  username = ""
  password = ""
  invalidLogin = false;

  // User = {
  //   username : 1,
  //   password : 1
  // }

    // error = " "
  // email = new FormControl('', [Validators.required, Validators.email]);


  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }

  // hide = true;


  constructor(private router: Router,
    private loginService: AuthService
  ) { }

  ngOnInit() {
  
  }

        

  checkLogin() {
    (this.loginService.auth(this.username, this.password)
    .subscribe(
        data => {
          this.router.navigate(['buyticket-list'])
          this.invalidLogin = false
        },
        error => {
          
            alert('Вы ввели неправильное имя или пароль')
            
        
          this.invalidLogin = true
        }
      ))
    
  }
}
