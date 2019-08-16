import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
