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

  CreditCard: any = [
    {
      name: 'MasterCard',
      icon: './../../../assets/images/58482354cef1014c0b5e49c0.png'
    },
    {
      name: 'Visa',
      icon: './../../../assets/images/Visa-Card-Logo-PNG-Isolated-Transparent-HD-Photo.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
