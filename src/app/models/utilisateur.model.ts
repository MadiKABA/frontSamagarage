import {Annonce} from "./annonce";

export interface Utilisateur{
  id:bigint;
  nom:string;
  prenom:string;
  telephone:string;
  email:string;
  password:string;
  statut:boolean;
  adresse:string;
  profil_id:bigint;
  annonces:Annonce[];
}
