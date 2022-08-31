import {Garage} from "./garage.model";

export interface Zone{
  id:number;
  libelle:string;
  garages:Garage[];

}
