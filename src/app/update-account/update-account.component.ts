import { DatePipe } from '@angular/common';
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

  today1 = new Date();
  mindate = new Date(this.today1.getFullYear() - 96, this.today1.getMonth(), this.today1.getDate());
  maxdate = new Date(this.today1.getFullYear() - 18, this.today1.getMonth(), this.today1.getDate());
  senior1 = new Date(this.today1.getFullYear() - 60, this.today1.getMonth(), this.today1.getDate());

  today = this.datepipe.transform(this.today1, 'yyyy-MM-dd');
  senior = this.datepipe.transform(this.senior1, 'yyyy-MM-dd');

  initialDepositAmount = "0";
  citizenStatus = "adult";

  onSubmit(value) {
    console.warn(value);
    if (value.accountType == "saving") {
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
  constructor(private router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

}
