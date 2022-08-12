import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileServiceService} from "../../../services/profiles/profile-service.service";
import {ServiceService} from "../../../services/service/service.service";

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.css']
})
export class AjoutServiceComponent implements OnInit {
  id!:number;
  profile!:Profile;
  errorMessage!:string
  constructor(
    private serviceService:ServiceService,
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router
  ) { }

  addService=this.fb.group({
    libelle:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(3)]],
    description:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(3)]]
  })
  ngOnInit(): void {
  }

  save(){
    /*if(this.addProfile.invalid) return
    if(this.id==0){*/
    this.serviceService.save(this.addService.value).subscribe(
      {
        next:(data)=>{
          this.addService.reset({})
          this.redirection();
        },
        error:(error)=>{
          this.errorMessage=error;

        }
      }
    )
    /* }else{
       this.profileService.updateProfile(this.id,this.addProfile.value).subscribe(
         {
           next:(data)=>{
             this.addProfile.reset({})
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
    this.routerRedirect.navigate(['listeServices']);
  }
  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addService.controls;
  }

}
