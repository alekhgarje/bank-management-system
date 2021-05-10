import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomerLoginComponent } from './customer-login.component';

describe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [CustomerLoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    localStorage.setItem("alekh", "alekh");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to navigate if credentials true', () => {
    var value = {
      "username": "alekh",
      "password": "alekh"
    }
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");
    component.onSubmit(value);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/navigate-in-login");
  });

  it('should go to home if credentials false', () => {
    var value = {
      "username": "wrong",
      "password": "wrong"
    }
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigateByUrl");
    component.onSubmit(value);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith("/");
  });
});
