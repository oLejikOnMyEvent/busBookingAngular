import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
 
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
   

  }

  onSignup( form: NgForm ){
    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
  }

}
