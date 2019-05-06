import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  courses: any = null;

  cols: any[];
  constructor(private service: DataService) { }

  ngOnInit() {
    var url='assets/dataFile.json';
    this.service.getRequest(url).subscribe(resp => 
      {
        this.courses = resp.data;
        console.log(resp);
      
      });

        this.cols = [
            { field: 'id', header: 'Id' },
            {field: 'name', header: 'Name' },
            { field: 'description', header: 'Description' }
        ];
  }

}

/* export interface Courses {
  id:number;
  name:string;
  description:string;

} */