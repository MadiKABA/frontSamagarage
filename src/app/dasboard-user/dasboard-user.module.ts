import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';



@NgModule({
  declarations: [
    SidebarUserComponent
  ],
  exports: [
    SidebarUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ]
})
export class DasboardUserModule { }
