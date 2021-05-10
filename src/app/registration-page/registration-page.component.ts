import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { account } from '../models/account.model';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {
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
    // console.warn("todays date: " + this.today);
    // console.warn("date of birth: " + value.dateOfBirth);
    // console.warn("seniority date: " + this.senior);
    // console.warn("registration date: " + value.registrationDate);
    if (value.dateOfBirth < this.senior) {
      // console.warn("date of birth is less than seniority date");
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
    //theAccountList.addAccount(this.acc);
    this.router.navigateByUrl("/");

  }
  //constructor(private _snackBar: MatSnackBar) { }
  constructor(private router: Router, public datepipe: DatePipe) { }

  ngOnInit(): void {
    // console.warn(this.senior1);
  }

}
