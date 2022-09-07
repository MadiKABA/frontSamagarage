import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { UserGarageComponent } from './garageUtilisateur/user-garage/user-garage.component';
import { UserAnnoncesComponent } from './annonceUtiisateur/user-annonces/user-annonces.component';



@NgModule({
  declarations: [
    SidebarUserComponent,
    UserGarageComponent,
    UserAnnoncesComponent
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
