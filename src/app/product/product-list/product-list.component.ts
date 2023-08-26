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
  prodName: string;
  filteredProducts: any[] = [];
  products = [];

  selectedCategory = '';
  searchProd = '';

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.FakeProducts;
      this.isLoaded = true;
    }, 500);
  }

  onSearchChange(searchValue: string): void {
    if (searchValue !== '') {
      this.searchProd = searchValue;
      this.filteredProducts = this.dataService.searchProduct(searchValue);
      console.log(this.filteredProducts);
    } else {
      this.filteredProducts = [];
    }
  }
  onSelected(category: string): void {
    console.log(category);
    this.selectedCategory = category;
  }

  applyFilter() {
    if (this.selectedCategory !== '') {
      this.filteredProducts = this.dataService.searchByCategory(this.selectedCategory);
      console.log(this.filteredProducts);
    } else {
      this.filteredProducts = [];
    }
  }

  clearFilter() {
    this.filteredProducts = [];
    this.searchProd = '';
    this.selectedCategory = '';
  }
}
