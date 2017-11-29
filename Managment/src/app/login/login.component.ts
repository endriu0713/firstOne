import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable
  login: string;
  password: string;

  loginClick(login, password){
    console.log(login + ' / ' + password);
    this.login = login;
    this.password = password;
    console.log(this.login);
  }


}
