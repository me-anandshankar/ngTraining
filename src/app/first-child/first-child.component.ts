import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {
  @Input() message: string = '';
  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  onClick($event) {
    this.notifyParent.emit("Learning Angular");
  }

  addNumber($event) {
    this.service.notifyChild(1);
  }

}
