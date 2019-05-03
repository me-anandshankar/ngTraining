import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {
  notifySubscription: Subscription;
  count: number = 0;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.myMehod();

  }

  myMehod(){
    this.notifySubscription = this.service.notifyChildObservable.subscribe(res => {
      this.count = this.count + res;

    });
  }

  ngOnDestroy() {
    if(this.notifySubscription)
    this.notifySubscription.unsubscribe();
  }



}
