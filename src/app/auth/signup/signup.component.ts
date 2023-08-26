import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  checkoutForm: FormGroup;

  Country: any = [
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

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      country: new FormControl('United States', Validators.required),
      city: new FormControl('', Validators.required),
      homeAddress: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      creditCardType: new FormControl('MasterCard', Validators.required)
    });
  }

  ngOnInit(): void {}

  onSubmit(value: any) {
    console.log(value);
  }
}
