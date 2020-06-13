import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datatsource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderRepository
{
    private orders: Order[] = [];

    constructor(private datatSource: StaticDataSource){}

    getOrders()
    {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.datatSource.saveOrder(order);
    }
}