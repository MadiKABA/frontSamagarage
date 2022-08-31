import {Note} from "./Note";
import {Service} from "./service.model";

export interface Garage{
  id:number;
  nom:string;
  description:string;
  dateAjoutdateAjout:Date;
  longitude:string;
  latitude:string;
  heureOurverture:string;
  heureFermeture:string;
  disponibilite:boolean
  etat:boolean
  adresse:string;
  image:string;
  zone_id:bigint;
  Utilisateur_id:bigint;
  telephone:string;
  notes:Note[];
  service:[];
  services:Service[];
}
