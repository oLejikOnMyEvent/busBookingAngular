import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegistrService } from './registr.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {


  form = this.fb.group({
    userName: this.fb.control('', Validators.required),
    password:  this.fb.control('',  Validators.required),
    fullName:  this.fb.control('',  Validators.required)
  })

  
 
  constructor(private RegistrService: RegistrService, private fb: FormBuilder) { }

  ngOnInit() {


  }

  onSubmit() {
   
    this.RegistrService.addUser(this.form.value.userName, this.form.value.fullName ,  this.form.value.password,)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    alert(`Пользователь ${this.form.value.fullName} успешно зарегистрирован`)
   
    this.form.reset({ userName: '', password: '', fullName: '' });
   
    }

}
