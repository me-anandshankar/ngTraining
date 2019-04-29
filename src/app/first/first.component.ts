import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'myfirst',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name: string = "Hello World1";
  courses: any[] = null;
  sub: Subscription = null;
  constructor(private service: DataService) { 
    
  }

  ngOnInit() {
    //this.service.getName();
    var url='assets/dataFile.json';
     this.sub = this.service.getRequest(url).subscribe(resp => 
      {
        this.courses = resp.data;

      });
  }

  gotFromChild(data) {
    this.name = data;
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }

 

}
