import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {RouterModule} from "@angular/router";
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { UserGarageComponent } from './garageUtilisateur/user-garage/user-garage.component';
import { UserAnnoncesComponent } from './annonceUtiisateur/user-annonces/user-annonces.component';
import { AjouteAnnonceComponent } from './annonceUtiisateur/ajoute-annonce/ajoute-annonce.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SidebarUserComponent,
    UserGarageComponent,
    UserAnnoncesComponent,
    AjouteAnnonceComponent
  ],
  exports: [
    SidebarUserComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
    ]
})
export class DasboardUserModule { }
