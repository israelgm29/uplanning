import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  url='http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  getall(){
    const path=`${this.url}/event`;
     return this.http.get(path);
  }

  getid(id: number) {
    const path=`${this.url}/event/`+ id;
    return this.http.get(path);
  }
}