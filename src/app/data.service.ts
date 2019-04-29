import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable(
  //{providedIn: 'root'}
  )
export class DataService {

  constructor(private http: HttpClient) { }

 /*  getName() {
    return "Hello from service";
  } */

  getRequest(url?: string) {

    console.log("in get request");
    return this.http.get<any>(url);
  }; 
}
