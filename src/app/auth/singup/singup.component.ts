import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RegistrService } from './registr.service'; 


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

 login: string = " ";
 password: string =" ";
 fullname: string = " ";

  constructor(private regist:RegistrService ) { }

  ngOnInit() {
   

  }
  AddNewUser(){
      this.regist.addUser(this.login, this.password, this.fullname)
      .subscribe((json)=> {console.log(json) });
      this.login = "";
      this.password = "";
      this.fullname ="";
    }


}
