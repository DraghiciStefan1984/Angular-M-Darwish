import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    private products: Product[]=
    [
        new Product(1, 'bike', 'sport', 'mountain bike', 245.55),
        new Product(2, 'helmet', 'sport', 'bike helmet', 45.25),
        new Product(3, 'laptop', 'it', 'portable computer', 560.00),
        new Product(4, 'HDD', 'it', 'external hdd', 105.55),
        new Product(5, 'chair', 'furniture', 'a  nice chair', 12.33),
        new Product(6, 'table', 'furniture', 'dining table', 90.99),
        new Product(7, 'tv', 'electronics', 'flat screen tv', 545.55),
        new Product(8, 'mixer', 'electronics', 'kitchen mixer', 34.55),
        new Product(9, 'air conditioner', 'electronics', 'air conditioner', 405.5),
        new Product(10, 'monitor', 'it', 'large monitor', 285.55),
    ]

    getProducts(): Observable<Product[]>
    {
        return from([this.products]);
    }
}