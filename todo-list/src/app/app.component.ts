import { Component } from '@angular/core';
import { Model, TodoItem } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  model=new Model();
  items = this.model.items;

  getName()
  {
    return this.model.user;
  }

  addItem(item)
  {
    this.model.items.push(new TodoItem('study', false));
  }
}
