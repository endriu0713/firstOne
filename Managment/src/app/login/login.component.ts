import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {  }

  ngOnInit() {
  }

  // tslint:disable

  user = new User();

  loginClick(login, password){
    this.user.login = login;
    this.user.password = password;
    console.log(this.user);
  }


}
