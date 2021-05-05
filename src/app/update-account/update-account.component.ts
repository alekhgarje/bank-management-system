import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from '../models/account.model';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})

export class UpdateAccountComponent implements OnInit {
  acc: account;
  //jsonStr;

  today = new Date();
  mindate = new Date(this.today.getFullYear() - 96, this.today.getMonth(), this.today.getDate());
  maxdate = new Date(this.today.getFullYear() - 18, this.today.getMonth(), this.today.getDate());
  senior = new Date(this.today.getFullYear() - 60, this.today.getMonth(), this.today.getDate());
  initialDepositAmount = "0";
  citizenStatus: string = "adult";

  onSubmit(value) {
    console.warn(value);
    if (value.accountType = "saving") {
      this.initialDepositAmount = "5000";
    }
    if (value.dateOfBirth < this.senior) {
      this.citizenStatus = "senior";
    }

    localStorage.setItem(value.username, value.password);

    this.acc = new account("R-001", "1111111111111111",
      value.name,
      value.username,
      value.password,
      value.guardianType,
      value.guardianName,
      value.address,
      value.citizenship,
      value.state,
      value.country,
      value.email,
      value.gender,
      value.maritalStatus,
      value.contactNumber,
      value.dateOfBirth,
      value.registrationDate,
      value.accountType,
      value.branchName,
      this.citizenStatus,
      this.initialDepositAmount,
      value.identificationType,
      value.identificationDocumentNumber,
      value.referenceAccountHolderName,
      value.referenceAccountHolderAccountNumber,
      value.referenceAccountHolderAddress
    );
    console.warn(this.acc);
    //this.jsonStr=JSON.stringify(this.acc);
    //theAccountList.editAccount(this.acc);
    this.router.navigateByUrl("/navigate-in-login");

  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
