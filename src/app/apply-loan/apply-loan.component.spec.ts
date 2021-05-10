import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ApplyLoanComponent } from './apply-loan.component';

describe('ApplyLoanComponent', () => {
  let component: ApplyLoanComponent;
  let fixture: ComponentFixture<ApplyLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ApplyLoanComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to navigateinlogin after submit', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");
    component.onSubmit(FormData);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/navigate-in-login");
  });

  it('should create a personal loan object', () => {
    var value = {
      "loanType": "personal",
      "loanAmount": 12,
      "loanApplyDate": "2021-12-31",
      "loanIssueDate": "2021-12-31",
      "durationOfLoan": "5",
      "annualIncome": 121211,
      "companyName": "asasas",
      "designaton": "223",
      "totalExperience": 5,
      "experienceWithCurrentCompany": 2
    }
    component.onSubmit(value);
    fixture.detectChanges();
    expect(component.personalLoan.loan.loanType).toEqual('personal');
  });

  it('should create a educational loan object', () => {
    var value = {
      "loanType": "educational",
      "loanAmount": 121212,
      "loanApplyDate": "2021-01-01",
      "loanIssueDate": "2021-01-01",
      "durationOfLoan": "10",
      "courseFee": 121212,
      "course": "ysdsd",
      "fatherOccupation": "doctorr",
      "rationCardNumber": 1,
      "annualIncome": 1212
    }
    component.onSubmit(value);
    fixture.detectChanges();
    expect(component.educationalLoan.loan.loanType).toEqual('educational');
  });
});
