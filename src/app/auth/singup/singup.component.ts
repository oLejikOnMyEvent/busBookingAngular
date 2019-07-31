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


  // form = this.fb.group({
  //   userName: [''],
  //   password: [''],
  //   fullName: ['']
  // })

  userName = new FormControl('', Validators.required);
  fullName = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
 
  constructor(private RegistrService: RegistrService, private fb: FormBuilder) { }

  ngOnInit() {


  }

  onSubmit() {
    console.log(this.userName.value +"useName" , this.password.value + "password", this.fullName.value + "fullname ");
    this.RegistrService.addUser(this.userName.value, this.fullName.value,  this.password.value,)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}
