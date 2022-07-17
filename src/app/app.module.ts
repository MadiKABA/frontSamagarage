import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { TrouverUnGarageComponent } from './trouver-un-garage/trouver-un-garage.component';
import { ListGaragesComponent } from './list-garages/list-garages.component';
import { DetailsGarageComponent } from './details-garage/details-garage.component';
import { ListOffresComponent } from './list-offres/list-offres.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TrouverUnGarageComponent,
    ListGaragesComponent,
    DetailsGarageComponent,
    ListOffresComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
