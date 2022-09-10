import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login/login.service";
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user!:any;
  usersesssion!:any;
  constructor(private loginService:LoginService,private router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.usersesssion=localStorage.getItem("user");
    this.user=JSON.parse(this.usersesssion);
    if (this.loginService.isLogggedIn() && this.user.profil_id==1 && this.user!=null){
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }

}
