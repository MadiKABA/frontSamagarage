import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Zone} from "../../../models/Zone.model";
import {ProfileServiceService} from "../../../services/profiles/profile-service.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ZoneServiceService} from "../../../services/zone/zone-service.service";

@Component({
  selector: 'app-ajout-zone',
  templateUrl: './ajout-zone.component.html',
  styleUrls: ['./ajout-zone.component.css']
})
export class AjoutZoneComponent implements OnInit {

  id!:number;
  zone!:Zone;
  errorMessage!:string
  constructor(
    private zoneService:ZoneServiceService,
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router
  ) { }

  ngOnInit(): void {
    //this.updateZone();
  }

  addZone=this.fb.group({
    libelle:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(3)]]
  })

  save(){
    console.log(this.addZone.value);
    /*if(this.addZone.invalid) return
    //alert("ok")
    if(this.id==0){
      alert("ok")*/
      this.zoneService.saveZone(this.addZone.value).subscribe(
        {
          next:(data)=>{
            this.addZone.reset({})
            this.redirection();
          },
          error:(error)=>{
            this.errorMessage=error;

          }
        }
      )
    /*}else{
      this.zoneService.updateZone(this.id,this.addZone.value).subscribe(
        {
          next:(data)=>{
            this.addZone.reset({})
            this.redirection();
          },
          error:(error)=>{
            this.errorMessage=error;
          }
        }
      )
    }*/

  }
  redirection(){
    this.routerRedirect.navigate(['listZones']);
  }

  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addZone.controls;
  }

  /*updateZone(){
    this.id=this.router.snapshot.params['id'];
    console.log(this.id);
    this.zoneService.getOneZone(this.id).subscribe({
      next:(data:any)=>{
        this.zone=data;
        console.log('le profile a modifier',this.zone.id);
        this.addZone=this.fb.group({
          libelle:(this.zone.libelle),
        })
        console.log(this.addZone.value);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }*/
}
