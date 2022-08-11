import { Component, OnInit } from '@angular/core';
import {Garage} from "../../../models/garage.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GarageService} from "../../../services/garage/garage.service";
import {ZoneServiceService} from "../../../services/zone/zone-service.service";
import {Zone} from "../../../models/Zone.model";
import {UtilisateursService} from "../../../services/utilisateur/utilisateurs.service";
import {Utilisateur} from "../../../models/utilisateur.model";

@Component({
  selector: 'app-ajout-garage',
  templateUrl: './ajout-garage.component.html',
  styleUrls: ['./ajout-garage.component.css']
})
export class AjoutGarageComponent implements OnInit {
  id!:number;
  garage!:Garage;
  zones!:Zone[];
  utilisateurs!:Utilisateur[];
  errorMessage!:string
  longitude:any;
  latitude:any;
  files:any;

  constructor(
    private serviceUtilisateur: UtilisateursService,
    private garageService:GarageService,
    private serviceZone:ZoneServiceService,
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router
  ) { }

  ngOnInit(): void {
    this.getAllZone();
    this.getAllUtilisateur();
    this.getLocation();
  }
  getLocation(){
    this.garageService.getLocation().then(resp=>{
      this.latitude=resp.lat;
      console.log(this.latitude);
      this.longitude=resp.long;
      console.log(this.longitude);
    })
  }

  addGarage=this.fb.group({
    nom:['',Validators.minLength(3)],
    description:['',Validators.minLength(3)],
    longitude:['',Validators.minLength(3)],
    latitude:['',Validators.minLength(3)],
    heureOurverture:['',Validators.minLength(3)],
    heureFermeture:['',Validators.minLength(3)],
    adresse:['',Validators.minLength(3)],
    image:['',Validators.minLength(3)],
    zone_id:['',Validators.minLength(3)],
    Utilisateur_id:['',Validators.minLength(3)],
  })

  public getAllZone(){
    this.serviceZone.getAllZones()
      .subscribe({
        next:(data)=>{
          this.zones=data;
          console.log('data',data);
        },
        error:(error)=>{
          console.log('error',error);
          this.errorMessage=error;
        }
      })
  }

  public getAllUtilisateur(){
    this.serviceUtilisateur.getAllUtilisateurs()
      .subscribe({
        next:(data)=>{
          this.utilisateurs=data;
          console.log(this.utilisateurs);
        },
        error:(error)=>{
          this.errorMessage=error;
        }
      })
  }

  redirection(){
    this.routerRedirect.navigate(['listGarage']);
  }
  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addGarage.controls;
  }
  uploadImage(event:any) {
    this.files=event.target.files[0];
    console.log(this.files)
  }

  save() {
    const formData=new FormData();
    formData.append("nom",this.addGarage.value.nom);
    formData.append("description",this.addGarage.value.description);
    formData.append("longitude",this.longitude);
    formData.append("latitude",this.latitude);
    formData.append("heureOurverture",this.addGarage.value.heureOurverture);
    formData.append("heureFermeture",this.addGarage.value.heureFermeture);
    formData.append("adresse",this.addGarage.value.adresse);
    formData.append("adresse",this.addGarage.value.adresse);
    formData.append("image",this.files,this.files.name);
    formData.append("zone_id",this.addGarage.value.zone_id);
    formData.append("Utilisateur_id",this.addGarage.value.Utilisateur_id);
      this.garageService.saveGarage(formData).subscribe({
        next:(data)=>{
          console.log(data);
          this.addGarage.reset();
          this.redirection();
        },
        error:(error)=>{
          this.errorMessage=error;
        }
      })
  }


}
