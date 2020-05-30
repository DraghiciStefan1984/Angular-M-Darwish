import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {

  @Input('parentData') name='';
  @Output() childData=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callChildEvent()
  {
    this.childData.emit('from child');
  }
}
