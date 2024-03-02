import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private dataService: DataServiceService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.dataService.login();
    this.router.navigate(['/home']);
  }
}
