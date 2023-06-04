import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  uploadImage(value: any) {
    let data = value;
    return this.http.post('https://api.cloudinary.com/v1_1/andresmelita/image/upload', data)
  }

  // public get(url: string){
  //   return this.http.get(url); // GET
  // }

  // public post(url: string, body: any){
  //   return this.http.post(url, body); // POST
  // }

}
