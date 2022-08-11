import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrouverUnGarageComponent} from "./components/trouver-un-garage/trouver-un-garage.component";
import {ListGaragesComponent} from "./components/list-garages/list-garages.component";
import {RouterModule, Routes} from "@angular/router";
import {DetailsGarageComponent} from "./components/details-garage/details-garage.component";
import {FormulaireComponent} from "./components/profiles/formulaire/formulaire.component";
import {ListProfileComponent} from "./components/profiles/list-profile/list-profile.component";
import {ListUtilisateursComponent} from "./components/utilisateurs/list-utilisateurs/list-utilisateurs.component";
import {FormUtilisateursComponent} from "./components/utilisateurs/form-utilisateurs/form-utilisateurs.component";
import {ListZonesComponent} from "./components/zone/list-zones/list-zones.component";
import {AjoutZoneComponent} from "./components/zone/ajout-zone/ajout-zone.component";
import {GaragesComponent} from "./components/garage/garages/garages.component";
import {AjoutGarageComponent} from "./components/garage/ajout-garage/ajout-garage.component";
import {ServicesComponent} from "./components/service/services/services.component";
import {AjoutServiceComponent} from "./components/service/ajout-service/ajout-service.component";





const routes: Routes = [
  { path: '', component: TrouverUnGarageComponent },
  { path: 'listeProfile', component: ListProfileComponent },
  { path: 'ListGarage', component: ListGaragesComponent },
  { path: 'detaiGarage', component: DetailsGarageComponent },
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
