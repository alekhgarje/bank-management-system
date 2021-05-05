import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateInLoginComponent } from './navigate-in-login.component';

describe('NavigateInLoginComponent', () => {
  let component: NavigateInLoginComponent;
  let fixture: ComponentFixture<NavigateInLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateInLoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateInLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
