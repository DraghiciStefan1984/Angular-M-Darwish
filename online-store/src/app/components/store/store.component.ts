import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/models/product.repository';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit 
{
  selectedCategory=null;
  productsPerPage=4;
  selectedPage=1;

  constructor(private productRepository: ProductRepository) {}

  ngOnInit(): void 
  {
  }

  get products(): Product[]
  {
    let pageIndex=(this.selectedPage-1)*this.productsPerPage;
    return this.productRepository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex+this.productsPerPage);
  }

  get categories(): string[]
  {
    return this.productRepository.getCategories();
  }

  changeCategory(newCategory?: string)
  {
    this.selectedCategory=newCategory;
  }

  changePage(newPage: number)
  {
    this.selectedPage=newPage;
  }

  changePageSize(newSize: number)
  {
    this.productsPerPage=+newSize;
    this.changePage(1);
  }

  get pageNumbers(): number[]
  {
    return Array(Math.ceil(
      this.productRepository.getProducts(
        this.selectedCategory).length/this.productsPerPage)).fill(0).map((x, i)=>i+1);
  }
}
