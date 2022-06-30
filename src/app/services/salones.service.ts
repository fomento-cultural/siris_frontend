import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class SalonesService {
  private url: string

  constructor(public http: HttpClient) {
    this.url = global.url;
  }

  getSalones(token: string|[]){
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(this.url + 'salones', { headers: headers });

  }
}
