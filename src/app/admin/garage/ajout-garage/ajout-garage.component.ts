import { Component, OnInit } from '@angular/core';
import {Garage} from "../../../models/garage.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GarageService} from "../../../services/garage/garage.service";
import {ZoneServiceService} from "../../../services/zone/zone-service.service";
import {Zone} from "../../../models/Zone.model";
import {UtilisateursService} from "../../../services/utilisateur/utilisateurs.service";
import {Utilisateur} from "../../../models/utilisateur.model";
import {ServiceService} from "../../../services/service/service.service";
import {Service} from "../../../models/service.model";

@Component({
  selector: 'app-ajout-garage',
  templateUrl: './ajout-garage.component.html',
  styleUrls: ['./ajout-garage.component.css']
})
export class AjoutGarageComponent implements OnInit {
  id!:number;
  garage!:Garage;
  zones!:Zone[];
  services!:Service[];
  utilisateurs!:Utilisateur[];
  errorMessage!:string
  longitude:any;
  latitude:any;
  files:any;
  selectedCheck:any=[];

  constructor(
    private serviceUtilisateur: UtilisateursService,
    private garageService:GarageService,
    private serviceZone:ZoneServiceService,
    private service:ServiceService,
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router
  ) { }

  ngOnInit(): void {
    this.getLocation();
    this.getAllZone();
    this.getAllUtilisateur();
    this.getAllService();
    this.update();
  }
  getLocation(){
    this.garageService.getLocation().then(resp=>{
      this.latitude=resp.lat;
      console.log(this.latitude);
      this.longitude=resp.long;
      console.log(this.longitude);
    })
  }
  checkChange(event:any) {
    let index=this.selectedCheck.indexOf(event.target.value)
    if (index==-1){
      this.selectedCheck.push(event.target.value);
    }else{
      this.selectedCheck.splice(index,1);
    }
    console.log(this.selectedCheck);
  }

  addGarage=this.fb.group({
    nom:['',Validators.minLength(3)],
    description:['',Validators.minLength(3)],
    longitude:['',Validators.minLength(3)],
    latitude:['',Validators.minLength(3)],
    telephone:['',Validators.minLength(3)],
    heureOurverture:['',Validators.minLength(3)],
    heureFermeture:['',Validators.minLength(3)],
    adresse:['',Validators.minLength(3)],
    image:['',Validators.minLength(3)],
    zone_id:['',Validators.minLength(3)],
    Utilisateur_id:['',Validators.minLength(3)],
    service:[this.selectedCheck],
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
  public getAllService(){
    this.service.getAll()
      .subscribe({
        next:(data)=>{
          this.services=data;
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
    this.routerRedirect.navigate(['/admin/listGarage']);
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
    if(this.addGarage.invalid)return
    else if(this.id==null){
      const formData=new FormData();
      formData.append("nom",this.addGarage.value.nom);
      formData.append("description",this.addGarage.value.description);
      formData.append("telephone",this.addGarage.value.telephone);
      formData.append("longitude",this.longitude);
      formData.append("latitude",this.latitude);
      formData.append("heureOurverture",this.addGarage.value.heureOurverture);
      formData.append("heureFermeture",this.addGarage.value.heureFermeture);
      formData.append("adresse",this.addGarage.value.adresse);
      formData.append("image",this.files,this.files.name);
      formData.append("zone_id",this.addGarage.value.zone_id);
      formData.append("Utilisateur_id",this.addGarage.value.Utilisateur_id);
      formData.append("service",this.addGarage.value.service);
      console.log(this.addGarage.value.service);
      console.log(formData.get("service"));
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
    }else{
      const formData=new FormData();
      formData.append("nom",this.addGarage.value.nom);
      formData.append("description",this.addGarage.value.description);
      formData.append("longitude",this.longitude);
      formData.append("latitude",this.latitude);
      formData.append("heureOurverture",this.addGarage.value.heureOurverture);
      formData.append("heureFermeture",this.addGarage.value.heureFermeture);
      formData.append("adresse",this.addGarage.value.adresse);
      formData.append("image",this.files,this.files.name);
      formData.append("zone_id",this.addGarage.value.zone_id);
      formData.append("Utilisateur_id",this.addGarage.value.Utilisateur_id);
      this.garageService.update(this.id,formData).subscribe(
        {
          next:(data)=>{
            this.redirection();
          },
          error:(error)=>{
            this.errorMessage=error;
          }
        }
      )
    }

  }

  update(){
    this.id=this.router.snapshot.params['id'];
    console.log(this.id);
    this.garageService.getOneGarage(this.id).subscribe({
      next:(data:any)=>{
        this.garage=data[0];
        console.log('garage a modifier',this.garage);
        this.addGarage=this.fb.group({
          nom:(this.garage.nom),
          description:(this.garage.description),
          heureOurverture:(this.garage.heureOurverture),
          heureFermeture:(this.garage.heureFermeture),
          adresse:(this.garage.adresse),
          image:(this.garage.image),
          zone_id:(this.garage.zone_id),
          Utilisateur_id:(this.garage.Utilisateur_id),
        })
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }


}
