import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-education-loan',
  templateUrl: './education-loan.component.html',
  styleUrls: ['./education-loan.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EducationLoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
