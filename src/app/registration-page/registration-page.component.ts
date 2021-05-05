import { Component, OnInit } from '@angular/core';
import { account } from '../models/account.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
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
    localStorage.setItem("username", value.username);
    localStorage.setItem("password", value.password);
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
  }
  //constructor(private _snackBar: MatSnackBar) { }
  constructor() { }

  ngOnInit(): void {
  }

}
