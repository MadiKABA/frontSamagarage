import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormulaireComponent} from "./admin/profiles/formulaire/formulaire.component";
import {ListProfileComponent} from "./admin/profiles/list-profile/list-profile.component";
import {ListUtilisateursComponent} from "./admin/utilisateurs/list-utilisateurs/list-utilisateurs.component";
import {FormUtilisateursComponent} from "./admin/utilisateurs/form-utilisateurs/form-utilisateurs.component";
import {ListZonesComponent} from "./admin/zone/list-zones/list-zones.component";
import {AjoutZoneComponent} from "./admin/zone/ajout-zone/ajout-zone.component";
import {GaragesComponent} from "./admin/garage/garages/garages.component";
import {AjoutGarageComponent} from "./admin/garage/ajout-garage/ajout-garage.component";
import {ServicesComponent} from "./admin/service/services/services.component";
import {AjoutServiceComponent} from "./admin/service/ajout-service/ajout-service.component";
import {DetailsGarageComponent} from "./public/details-garage/details-garage.component";
import {ListGaragesComponent} from "./public/list-garages/list-garages.component";
import {PublicComponent} from "./public/public.component";
import {TrouverUnGarageComponent} from "./public/trouver-un-garage/trouver-un-garage.component";
import {AdminComponent} from "./admin/admin.component";





const routes: Routes = [

  {
    path: '', component: PublicComponent,
    children:[
      { path: '', component: TrouverUnGarageComponent },
      { path: 'ListGarage', component: ListGaragesComponent },
      { path: 'detaiGarage', component: DetailsGarageComponent },
    ]
  },
  {path:'admin',component: AdminComponent,
    children:[
      { path: 'listeProfile', component: ListProfileComponent },
      {path:'ajoutProfile',component: FormulaireComponent},
      {path:'updateProfile/:id',component: FormulaireComponent},
      //gestion des tulisateurs
      {path: 'listeutilisateurs',component:ListUtilisateursComponent},
      {path: 'Ajoututilisateurs',component:FormUtilisateursComponent},
      {path: 'updateUtilisateurs/:id',component:FormUtilisateursComponent},
      //gestion des zones
      {path:'listZones',component:ListZonesComponent},
      {path:'ajoutZones',component:AjoutZoneComponent},
      {path:'updateZones/:id',component:AjoutZoneComponent},
      //gestion des garages
      {path:'listGarage',component:GaragesComponent},
      {path:'AjoutGarage',component:AjoutGarageComponent},
      //gestion des services
      {path:'listeServices',component:ServicesComponent},
      {path:'AjoutServices',component:AjoutServiceComponent},
      {path:'updateService',component:AjoutServiceComponent},
    ]},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
