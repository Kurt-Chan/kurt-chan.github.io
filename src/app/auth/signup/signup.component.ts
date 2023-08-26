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

  errorMessage: string = '';

  errorMessages = {
    firstName: [{ type: 'required', message: 'First Name is required.' }],
    lastName: [{ type: 'required', message: 'Last Name is required.' }],
    emailAddress: [
      { type: 'required', message: 'Email Address is required!' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],

    contact: [
      { type: 'required', message: 'Contact number is required!' },
      { type: 'minlength', message: 'Should be 11 digits long.' },
      { type: 'maxlength', message: 'Should be 11 digits long.' }
    ],
    country: [{ type: 'required', message: 'Country is required.' }],
    city: [{ type: 'required', message: 'City is required!' }],
    homeAddress: [{ type: 'required', message: 'Address is required!' }],
    zipCode: [{ type: 'required', message: 'Zip Code is required!' }],
    creditCard: [
      { type: 'required', message: 'Credit Card number is required!' },
      { type: 'minlength', message: 'Should be 16 digits long' },
      { type: 'maxlength', message: 'Should be 16 digits long' }
    ],
    creditCardType: [{ type: 'required', message: 'Credit Card Type is required!' }]
  };

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      country: new FormControl('United States', Validators.required),
      city: new FormControl('', Validators.required),
      homeAddress: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      creditCardType: new FormControl('MasterCard', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ])
    });
  }

  ngOnInit(): void {}

  onSubmit(value: any) {
    console.log(value);
  }
}
