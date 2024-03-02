import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList as staticMenuList } from '../../data/menus';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList = [];
  isLessThenLargeDevice;
  cartItems = [];
  authUser: boolean = false;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private dataService: DataServiceService
  ) {}

  ngOnInit(): void {
    this.menuList = staticMenuList;

    // This is for mobile view
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });

    // Setting an interval for the badge Cart
    setInterval(() => {
      this.cartItems = this.dataService.showCart();
    }, 500);

    // checks if the user is logged in
    if (localStorage.getItem('AuthUser')) {
      console.log('Auth user is present');
      this.authUser = true;
    }
  }

  // For mobile view
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }

  logout() {
    this.dataService.logout();
    // this.router.navigate(['/home']);
    window.location.reload();
  }
}
