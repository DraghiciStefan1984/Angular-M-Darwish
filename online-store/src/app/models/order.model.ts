import { Cart } from './../components/store/cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    shipped: boolean = false;

    constructor(private cart: Cart)
    {

    }

    clear()
    {
        this.id = null;
        this.name = this.address = this.city = this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}