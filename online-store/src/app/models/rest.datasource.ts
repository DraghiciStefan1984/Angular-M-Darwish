import { Order } from './order.model';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


const PROTOCOL="http";
const PORT=3500;

@Injectable()
export class RestDataSource
{
    baseUrl: string;
    authToken: string;

    constructor(private http: HttpClient)
    {
        this.baseUrl='${PROTOCOL}://${location.hostname}:${PORT}/';
    }

    getProducts(): Observable<Product[]>
    {
        return this.http.get<Product[]>(this.baseUrl+"products");
    }

    saveOrder(order: Order): Observable<Order>
    {
        return this.http.post<Order>(this.baseUrl+"orders", order);
    }

    authenticate(user: string, password: string): Observable<boolean>
    {
        return this.http.post<any>(this.baseUrl+"login", {name: user, password: password})
        .pipe(map(response=>
            {
                this.authToken=response.success ? response.token : null;
                return response.success;
            }
        ));
    }
}