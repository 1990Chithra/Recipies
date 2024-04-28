import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShowappApiService {


  constructor(private http:HttpClient) { }

  getRecipiesAPI(){
      return this.http.get('https://dummyjson.com/recipes')
  }

} 