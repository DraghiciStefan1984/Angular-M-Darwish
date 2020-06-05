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
  constructor(private productRepository: ProductRepository) {}

  ngOnInit(): void 
  {
  }

  get products(): Product[]
  {
    return this.productRepository.getProducts();
  }

  get categories(): string[]
  {
    return this.productRepository.getCategories();
  }
}
