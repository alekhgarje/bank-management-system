import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigateInLoginComponent } from '../navigate-in-login/navigate-in-login.component';

import { UpdateAccountComponent } from './update-account.component';

describe('UpdateAccountComponent', () => {
  let component: UpdateAccountComponent;
  let fixture: ComponentFixture<UpdateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'navigate-in-login', component: NavigateInLoginComponent }
      ]), FormsModule],
      declarations: [UpdateAccountComponent],
      providers: [DatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home page after submit', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");
    var value = {
      "name": "garje",
      "username": "garje",
      "password": "garje",
      "guardianType": "father",
      "guardianName": "garje",
      "address": "garje",
      "citizenship": "indian",
      "country": "india",
      "state": "garje",
      "email": "alekh@gmail.com",
      "gender": "male",
      "maritalStatus": "married",
      "contactNumber": "1212121212",
      "dateOfBirth": "2003-12-31",
      "registrationDate": "2021-12-31",
      "accountType": "saving",
      "branchName": "sinhgadRoad",
      "identificationDocumentNumber": "121212121212",
      "referenceAccountHolderName": "garje",
      "referenceAccountHolderAccountNumber": 1212121212,
      "referenceAccountHolderAddress": "garje"
    }
    component.onSubmit(value);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/navigate-in-login");
  });

  it('object testing adult and saving', () => {
    var value = {
      "name": "garje",
      "username": "garje",
      "password": "garje",
      "guardianType": "father",
      "guardianName": "garje",
      "address": "garje",
      "citizenship": "indian",
      "country": "india",
      "state": "garje",
      "email": "alekh@gmail.com",
      "gender": "male",
      "maritalStatus": "married",
      "contactNumber": "1212121212",
      "dateOfBirth": "2003-12-31",
      "registrationDate": "2021-12-31",
      "accountType": "saving",
      "branchName": "sinhgadRoad",
      "identificationDocumentNumber": "121212121212",
      "referenceAccountHolderName": "garje",
      "referenceAccountHolderAccountNumber": 1212121212,
      "referenceAccountHolderAddress": "garje"
    }
    component.onSubmit(value);
    fixture.detectChanges();
    expect(component.acc.citizenStatus).toEqual('adult');
    expect(component.acc.initialDepositAmount).toEqual('5000');
  });


  it('object testing senior and salary', () => {
    var value = {
      "name": "alekh",
      "username": "alekh",
      "password": "alekh",
      "guardianType": "father",
      "guardianName": "alekh",
      "address": "alekh",
      "citizenship": "indian",
      "country": "india",
      "state": "alekh",
      "email": "alekh@gmail.com",
      "gender": "male",
      "maritalStatus": "married",
      "contactNumber": "1212121212",
      "dateOfBirth": "1925-08-05",
      "registrationDate": "2021-05-10",
      "accountType": "salary",
      "branchName": "sinhgadRoad",
      "identificationDocumentNumber": "121212121212",
      "referenceAccountHolderName": "alekh",
      "referenceAccountHolderAccountNumber": 1212121212,
      "referenceAccountHolderAddress": "alekh"
    }
    component.onSubmit(value);
    fixture.detectChanges();
    expect(component.acc.citizenStatus).toEqual('senior');
    expect(component.acc.initialDepositAmount).toEqual('0');
  });
});
