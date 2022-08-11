import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { TrouverUnGarageComponent } from './components/trouver-un-garage/trouver-un-garage.component';
import { ListGaragesComponent } from './components/list-garages/list-garages.component';
import { DetailsGarageComponent } from './components/details-garage/details-garage.component';
import { ListOffresComponent } from './components/list-offres/list-offres.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ListProfileComponent } from './components/profiles/list-profile/list-profile.component';
import { FormulaireComponent } from './components/profiles/formulaire/formulaire.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ListUtilisateursComponent} from "./components/utilisateurs/list-utilisateurs/list-utilisateurs.component";
import { FormUtilisateursComponent } from './components/utilisateurs/form-utilisateurs/form-utilisateurs.component';
import { ListZonesComponent } from './components/zone/list-zones/list-zones.component';
import { AjoutZoneComponent } from './components/zone/ajout-zone/ajout-zone.component';
import { GaragesComponent } from './components/garage/garages/garages.component';
import { AjoutGarageComponent } from './components/garage/ajout-garage/ajout-garage.component';
import { ServicesComponent } from './components/service/services/services.component';
import { AjoutServiceComponent } from './components/service/ajout-service/ajout-service.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrouverUnGarageComponent,
    ListGaragesComponent,
    DetailsGarageComponent,
    ListOffresComponent,
    FooterComponent,
    ListProfileComponent,
    FormulaireComponent,
    ListUtilisateursComponent,
    FormUtilisateursComponent,
    ListZonesComponent,
    AjoutZoneComponent,
    GaragesComponent,
    AjoutGarageComponent,
    ServicesComponent,
    AjoutServiceComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
