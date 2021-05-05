import { Component, OnInit } from '@angular/core';
import { account } from "../models/account.model";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  route = "";
  emailTyped = "";
  passwordTyped = "";
  invalid = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkCredentials() {
    console.warn(this.emailTyped);
    console.warn(this.passwordTyped);
    if (this.emailTyped == localStorage.getItem("username") && this.passwordTyped == localStorage.getItem("password")) {
      this.route = "/navigate-in-login";
    }
    else this.route = "/";
  }

  onSubmit(value) {
    console.warn(value);
    if (value.email != localStorage.getItem("username") || value.password != localStorage.getItem("password")) {
      this.invalid = true;
    }
  }
}
