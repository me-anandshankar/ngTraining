import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable(
  //{providedIn: 'root'}
  )
export class DataService {

  constructor(private http: HttpClient) { }

 /*  getName() {
    return "Hello from service";
  } */

  private notifyChildSubject = new BehaviorSubject<number>(0);

  notifyChildObservable = this.notifyChildSubject.asObservable();

  getRequest(url?: string) {

    console.log("in get request");
    return this.http.get<any>(url);
  }; 

  notifyChild(value: number) {
    this.notifyChildSubject.next(value);
  }
}
