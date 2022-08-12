import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from "../../../services/profiles/profile-service.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Profile} from "../../../models/profile.model";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  id!:number;
  profile!:Profile;
  errorMessage!:string

  constructor(
    private profileService:ProfileServiceService,
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router
  ) { }

  ngOnInit(): void {
    this.updateProfile();
  }
  addProfile=this.fb.group({
    libelle:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(3)]]
  })
  save(){
    /*if(this.addProfile.invalid) return
    if(this.id==0){*/
      this.profileService.saveProfile(this.addProfile.value).subscribe(
        {
          next:(data)=>{
            this.addProfile.reset({})

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
    this.routerRedirect.navigate(['listeProfile']);
  }
  /*Controle les champs de saisie*/
  get controleSaisie(){
    return this.addProfile.controls;
  }

  updateProfile(){
    this.id=this.router.snapshot.params['id'];
    console.log(this.id);
    this.profileService.getOneProfile(this.id).subscribe({
      next:(data:any)=>{
        this.profile=data[0];
        console.log('le profile a modifier',this.profile.id);
        this.addProfile=this.fb.group({
          libelle:(this.profile.libelle),
        })
        console.log(this.addProfile.value);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
