import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {UtilisateursService} from "../../../services/utilisateur/utilisateurs.service";
import {Utilisateur} from "../../../models/utilisateur.model";

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

  messageError!:string;
  utilisateurs!:Utilisateur[];
  constructor(private serviceUtilisateur:UtilisateursService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
    this.serviceUtilisateur.getAllUtilisateurs()
      .subscribe({
        next:(data)=>{
          this.utilisateurs=data;
          console.log(this.utilisateurs);
        },
        error:(error)=>{
          this.messageError=error;
        }
      })
  }

  delete(id:bigint){
    this.serviceUtilisateur.deleteUser(id).subscribe({
      next:(data)=>{
        // console.log(id);
        this.getAll();
      },
      error:(error: string)=>{
        this.messageError=error
      }
    })
  }
}
