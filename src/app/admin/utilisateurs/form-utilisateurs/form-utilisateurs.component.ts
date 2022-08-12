import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Utilisateur} from "../../../models/utilisateur.model";
import {FormBuilder, Validators} from "@angular/forms";
import {ProfileServiceService} from "../../../services/profiles/profile-service.service";
import {UtilisateursService} from "../../../services/utilisateur/utilisateurs.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-utilisateurs',
  templateUrl: './form-utilisateurs.component.html',
  styleUrls: ['./form-utilisateurs.component.css']
})
export class FormUtilisateursComponent implements OnInit {
  controleSaisie: any;
  errorMessage!:string
  profiles!:Profile[];
  id:any
  data!:Utilisateur
  profile!:Profile
  private router!: Router;
  constructor(
    private fb:FormBuilder,
    private serviceProfile:ProfileServiceService,
    private serviceUtilisateurs:UtilisateursService,
    private routerRedirect:Router,
    private activatideRouter:ActivatedRoute
  ) { }

  getAllProfiles(){
    this.serviceProfile.getAllProfile().subscribe({
      next:(data=>{
        this.profiles=data
      }),
      error:(error)=>{
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.getAllProfiles();
    //this.updateUser();
  }
  saveUtilisateurs=this.fb.group({
    nom:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
    prenom:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    telephone:this.fb.control(null,[Validators.required,Validators.minLength(9),Validators.pattern("[0-9]+")]),
    email:this.fb.control(null,[Validators.required,Validators.email]),
    password:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
    adresse:this.fb.control(null,[Validators.required,Validators.minLength(9)]),
    profil_id:this.fb.control({id:1}),

  })

  save(){
    if(this.saveUtilisateurs.invalid)return
    else if(this.id==null){
      let utilisateur=this.saveUtilisateurs.value;
      console.log(utilisateur);
      this.serviceUtilisateurs.saveUtilisateurs(utilisateur).subscribe({
        next:(data)=>{
          alert("Ajout effectuer avec success");
          this.redirction();
        },
        error:(error)=>{
          console.log(error);
        }
      })
      //console.log('ajout de l\'etudiant',this.saveUtilisateurs.value);

    }else{
      this.serviceUtilisateurs.updateUser(this.id,this.saveUtilisateurs.value).subscribe(
        {
          next:(data)=>{
            this.redirction();
          },
          error:(error)=>{
            this.errorMessage=error;

          }
        }
      )
    }
  }

  redirction(){
    this.routerRedirect.navigate(['/listeutilisateurs']);
  }

  /*updateUser(){
    this.id=this.activatideRouter.snapshot.params['id'];
    console.log(this.id);
    this.serviceUtilisateurs.getOneUser(this.id).subscribe({
      next:(data:any)=>{
        this.data=data[0];
        console.log('le profile a modifier',this.data.id);
        this.saveUtilisateurs=this.fb.group({
          nom:(this.data.nom),
          prenom:(this.data.prenom),
          email:(this.data.email),
          password:(this.data.password),
          telephone:(this.data.telephone),
          adresse:(this.data.adresse),
          profil_id:({id:1}),
        })
        //console.log(this.serviceUtilisateurs.value);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }*/
}
