import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educationLoan } from '../models/educationLoan.model';
import { loan } from '../models/loan.model';
import { personalLoan } from '../models/personalLoan.model';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  loan: loan;
  educationalLoan: educationLoan;
  personalLoan: personalLoan;

  loanTypeSelected = "";
  loanApplyDateSelected: Date;
  today: Date;
  selected: Date;
  valid = true;
  //jsonStr;
  onSubmit(value) {
    console.warn(value);
    if (value.loanType == "educational") {
      const rateOfInterest = "5";
      this.loan = new loan(value.loanType, value.loanAmount, value.loanApplyDate, value.loanIssueDate, rateOfInterest, value.durationOfLoan);
      this.educationalLoan = new educationLoan(this.loan, value.courseFee, value.course, value.fatherOccupation, value.rationCardNumber, value.annualIncome);
      //console.warn("education loan: " + this.educationalLoan);
    }
    else if (value.loanType == "personal") {
      const rateOfInterest = "8";
      this.loan = new loan(value.loanType, value.loanAmount, value.loanApplyDate, value.loanIssueDate, rateOfInterest, value.durationOfLoan);
      this.personalLoan = new personalLoan(this.loan, value.annualIncome, value.companyName, value.designaton, value.totalExperience, value.experienceWithCurrentCompany);
      //console.warn("personal loan: " + this.personalLoan);
    }
    //this.jsonStr=JSON.stringify(this.loan);
    //theLoanList.addLoan(this.loan);
    this.router.navigateByUrl("/navigate-in-login");
  }

  //date = new Date;

  checkDate() {
    this.valid = true;
    this.today = new Date();
    this.selected = new Date(this.loanApplyDateSelected);
    //console.warn("selected date:" + this.selected);
    //console.warn("today date:" + this.today);
    if (this.today < this.selected) {
      this.valid = false;
      //console.warn(this.valid);
      this.loanApplyDateSelected = null;
    }
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
