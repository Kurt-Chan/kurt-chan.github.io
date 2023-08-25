import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  City: any = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Philippines',
    'Japan',
    'China',
    'India',
    'Brazil',
    'Mexico',
    'South Korea',
    'Russia',
    'Netherlands',
    'Switzerland',
    'Sweden',
    'Norway',
    'Singapore'
  ];

  constructor() {}

  ngOnInit(): void {}
}
