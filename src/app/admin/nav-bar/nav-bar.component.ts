import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../../services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //Pour gerer le togle de navbar
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean= false;
  usersesssion!:any;
  user!:any

  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.usersesssion=localStorage.getItem("user");
    this.user=JSON.parse(this.usersesssion);
  }
  navbarTogle(){
    this.menuStatus=!this.menuStatus
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout() {
    this.login.logout();
    this.router.navigate([""]);
  }
}
