import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firstapp';
  first_name='Stefan';
  last_name='Draghici';
  flag=false;
  myclass='myclass';

  name="Stefan Draghici";
  message=null;

  @ViewChild('someInput') someInput:ElementRef;

  show()
  {
    this.flag=!this.flag;
  }

  ngOnInit(): void 
  {
    this.someInput.nativeElement.value='updated input';
  }
}
