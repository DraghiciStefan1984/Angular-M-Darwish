import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ModelModule } from 'src/app/models/model.module';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, ModelModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
    exports: [StoreComponent, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class StoreModule{}