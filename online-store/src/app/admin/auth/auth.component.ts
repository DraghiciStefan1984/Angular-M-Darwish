import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit 
{
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  authenticate(form: NgForm)
  {
    if(form.valid)
    {
      this.router.navigateByUrl('/admin/main');
    }
    else
    {
      this.errorMessage='auth error....';
    }
  }
}