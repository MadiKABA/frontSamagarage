import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {
  @Input() sideNavStatus:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

}
