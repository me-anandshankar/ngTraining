import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myfirst',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = "Hello World1";

  constructor() { }

  ngOnInit() {
  }

  gotFromChild(data) {
    this.name = data;
  }

 

}
