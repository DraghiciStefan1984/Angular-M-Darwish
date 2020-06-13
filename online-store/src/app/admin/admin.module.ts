import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routing=RouterModule.forChild([
    {path: 'auth', component:AuthComponent},
    {path: 'main', component:AdminComponent},
    {path: '**', redirectTo: "auth"},
])


@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent]
})
export class AdminModule{}