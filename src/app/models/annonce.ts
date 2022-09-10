import {Note} from "./Note";
import {Service} from "./service.model";

export interface Annonce{
  id:number;
  titre:string;
  description:string;
  datePublication:Date;
  prix:number;
  urlImage:string;
  statut:boolean;
  cloture:boolean;
  Utilisateur_id:bigint;
  typeAnnonce_id:bigint;
}
