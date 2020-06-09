import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datatsource';
import { Cart } from '../components/store/cart.model';

@NgModule({providers: [ProductRepository, StaticDataSource, Cart]})
export class ModelModule{}