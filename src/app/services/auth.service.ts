import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='http://localhost:4200/login';
  constructor(private http:HttpClient) { }
  click(user:any){
return this.http.post(this.apiurl,user)
  }
  isLogedin(){
    return localStorage.getItem('token');
  }
}
