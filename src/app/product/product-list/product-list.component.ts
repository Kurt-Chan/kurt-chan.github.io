import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.FakeProducts;
      this.isLoaded = true;
    }, 500);
  }

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }
}
