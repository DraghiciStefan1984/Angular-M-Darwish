import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './components/store/store.module';
import { StoreComponent } from './components/store/store.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { StoreFirstGuard } from './components/store/storefirst.guard';


const routes: Routes = [
  {path: "store", component: StoreComponent, canActivate:[StoreFirstGuard]},
  {path: "cart", component: CartDetailsComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "**", redirectTo: "store"},
];

@NgModule({
  imports: [BrowserModule, StoreModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [StoreFirstGuard],
})
export class AppRoutingModule { }
