import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public generateToken(loginData:any){
    return this.http.post('http://127.0.0.1:8000/api/login',loginData)
  }
  public loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  public isLogggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr==null){
      return false;
    }else {
      return true;
    }
  }
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }
  public getTokens(){
    let tokenStr=localStorage.getItem("token");
    return tokenStr;
  }
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.stringify(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  /*public getRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }*/

}
