import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from "../models/account.model";

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  invalid = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(value) {
    console.warn(value);
    if (value.password != localStorage.getItem(value.username)) {
      this.router.navigateByUrl("/");
      this.invalid = true;
    }
    else {
      this.router.navigateByUrl("/navigate-in-login");
    }
  }
}
