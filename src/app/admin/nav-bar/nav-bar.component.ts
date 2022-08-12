import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //Pour gerer le togle de navbar
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
  navbarTogle(){
    this.menuStatus=!this.menuStatus
    this.sideNavToggled.emit(this.menuStatus);
  }

}
