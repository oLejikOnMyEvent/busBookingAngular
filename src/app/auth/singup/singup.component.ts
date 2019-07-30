import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RegistrService } from './registr.service'; 


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {


  form: FormGroup;


  constructor(private RegistrService:RegistrService ) { }

  ngOnInit() {
   this.form = new FormGroup({
     userName : new FormControl(null, [Validators.required]),
  password: new FormControl(null,[Validators.required]),
     fullName : new FormControl (null, [Validators.required])
   });

  }

  onSubmit(){
        console.log(this.form);
       // this.RegistrService.addUser()
    }


}
