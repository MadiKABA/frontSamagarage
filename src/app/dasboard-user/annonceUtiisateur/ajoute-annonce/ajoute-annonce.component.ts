import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AnnonceService} from "../../../services/annonce/annonce.service";
import {TypeAnnoceService} from "../../../services/typeAnnone/type-annoce.service";
import {TypeAnnonce} from "../../../models/typeAnnonce";

@Component({
  selector: 'app-ajoute-annonce',
  templateUrl: './ajoute-annonce.component.html',
  styleUrls: ['./ajoute-annonce.component.css']
})
export class AjouteAnnonceComponent implements OnInit {
  files:any;
  errorMessage!:string;
  typeAnnonces!:TypeAnnonce[];
  id!:number;
  usersesssion!:any;
  user!:any;
  idUsr!:any;
  constructor(
    private fb:FormBuilder,
    private router:ActivatedRoute,
    private routerRedirect:Router,
    private annonceService:AnnonceService,
    private typeAnnonceService:TypeAnnoceService,
  ) { }

  ngOnInit(): void {
    this.usersesssion=localStorage.getItem("user");
    this.user=JSON.parse(this.usersesssion);
    this.idUsr=this.user.id;
    console.log(this.idUsr);
    this.getAllTypeAnnonce();
  }
  addAnnonce=this.fb.group({
    titre:['',Validators.minLength(3)],
    description:['',Validators.minLength(3)],
    prix:['',Validators.minLength(3)],
    urlImage:['',Validators.minLength(3)],
    typeAnnonce_id:['',Validators.minLength(3)],
    Utilisateur_id:this.idUsr,
  })
  getAllTypeAnnonce(){
    this.typeAnnonceService.getAll().subscribe({
      next:(data)=>{
        this.typeAnnonces=data;
      },
      error:(error)=>{
        this.errorMessage=error;
      }
    })
  }
  get controleSaisie(){
    return this.addAnnonce.controls;
  }
  uploadImage(event:any) {
    this.files=event.target.files[0];
    console.log(this.files)
  }
  redirection(){
    this.routerRedirect.navigate(['/userDashboard/AjoutAnnonce']);
  }
  save() {
    if(this.addAnnonce.invalid)return
    else if(this.id==null){
      console.log(this.addAnnonce);
      console.log(this.idUsr);
      const formData=new FormData();
      formData.append("titre",this.addAnnonce.value.titre);
      formData.append("prix",this.addAnnonce.value.prix);
      formData.append("description",this.addAnnonce.value.description);
      formData.append("telephone",this.addAnnonce.value.prix);
      formData.append("urlImage",this.files,this.files.name);
      formData.append("typeAnnonce_id",this.addAnnonce.value.typeAnnonce_id);
      formData.append("utilisateur_id",this.idUsr);
      console.log(formData.getAll("Utilisateur_id"));
      this.annonceService.save(formData).subscribe({
        next:(data)=>{
          console.log(data);
          this.addAnnonce.reset();
          this.redirection();
        },
        error:(error)=>{
          this.errorMessage=error;
        }
      })
      console.log(this.user.id);
    }else{
      const formData=new FormData();
      formData.append("nom",this.addAnnonce.value.titre);
      formData.append("description",this.addAnnonce.value.description);
      formData.append("telephone",this.addAnnonce.value.prix);
      formData.append("urlImage",this.files,this.files.name);
      formData.append("typeAnnonce_id",this.addAnnonce.value.typeAnnonce_id);
      formData.append("Utilisateur_id",this.addAnnonce.value.Utilisateur_id);
      /*this.annonceService.update(this.id,formData).subscribe(
        {
          next:(data)=>{
            this.redirection();
          },
          error:(error)=>{
            this.errorMessage=error;
          }
        }
      )*/
    }

  }

}
