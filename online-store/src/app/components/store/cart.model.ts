import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Injectable()
export class Cart
{
    lines: CartLine[]=[];
    itemCount: number=0;
    cartPrice: number=0;

    addLine(product: Product, quantity: number=1)
    {
        let line=this.lines.find(line=>line.product.id===product.id);
        if(line!=undefined) line.quantity+=quantity;
        else  this.lines.push(new CartLine(product, quantity));
        this.recalc();
    }

    updateQuantity(product: Product, quantity: number)
    {
        let line=this.lines.find(line=>line.product.id===product.id);
        if(line!=undefined) line.quantity=+quantity;
        this.recalc();
    }

    removeLine(id: number)
    {
        let index=this.lines.findIndex(line=>line.product.id===id);
        this.lines.splice(index, 1);
        this.recalc();
    }

    clear()
    {
        this.lines=[];
        this.itemCount=0;
        this.cartPrice=0;
    }

    recalc()
    {
        this.itemCount=0;
        this.cartPrice=0;
        this.lines.forEach(l=>
            {
                this.itemCount+=l.quantity;
                this.cartPrice+=(l.quantity*l.product.price);
            });
    }
}


export class CartLine
{
    constructor(public product: Product, public quantity: number){}

    get lineTotal()
    {
        return this.quantity*this.product.price;
    }
}