import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { account } from '../models/account.model';
import { RegistrationPageComponent } from './registration-page.component';
import { DatePipe } from '@angular/common';

describe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [RegistrationPageComponent],
      providers:[DatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home page after submit', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");
    component.onSubmit(FormData);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/");
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
