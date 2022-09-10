import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login/login.service";
import {UtilisateursService} from "../../../services/utilisateur/utilisateurs.service";
import {error} from "@angular/compiler/src/util";
import {Utilisateur} from "../../../models/utilisateur.model";
import {AnnonceService} from "../../../services/annonce/annonce.service";

@Component({
  selector: 'app-user-annonces',
  templateUrl: './user-annonces.component.html',
  styleUrls: ['./user-annonces.component.css']
})
export class UserAnnoncesComponent implements OnInit {
  user!:any;
  annonceUser!:Utilisateur;
  urlImage:any="http://localhost:8000";
  constructor(private login:LoginService,
              private userService:UtilisateursService,
              private annonceService:AnnonceService) { }

  ngOnInit(): void {
    this.getAnnonce();
  }
  getAnnonce(){
      const userSession=localStorage.getItem('user');
      // @ts-ignore
    this.user=JSON.parse(userSession);
    console.log(this.user.id);
    this.userService.getOneUser(this.user.id).subscribe({
      next:(data)=>{
        this.annonceUser=data;
        console.log(data);
      },error:(error)=>{
        console.log("error: ",error);
      }
    })
  }

  cloturer(id: number) {
      this.annonceService.cloturer(id).subscribe({
        next:(data)=>{
          this.getAnnonce();
        },error:(error)=>{
          console.log("error:",error);
        }
      })
  }

  delete(id: number) {

  }
}
