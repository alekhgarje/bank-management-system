import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PersonalLoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
