import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService 
{
  private url: string = "/assets/json/persons.json";

  constructor(private _httpClient: HttpClient) { }

  getData(): Observable<Person[]>
  {
    return this._httpClient.get<Person[]>(this.url);
  }
}
