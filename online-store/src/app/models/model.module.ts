import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datatsource';

@NgModule({providers: [ProductRepository, StaticDataSource]})
export class ModelModule{}