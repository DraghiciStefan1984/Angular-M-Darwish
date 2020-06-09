import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ModelModule } from 'src/app/models/model.module';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';

@NgModule({
    imports: [BrowserModule, ModelModule, FormsModule],
    declarations: [StoreComponent, CartSummaryComponent],
    exports: [StoreComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class StoreModule{}