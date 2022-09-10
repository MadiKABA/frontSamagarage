import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Garage} from "../../../models/garage.model";
import {GarageService} from "../../../services/garage/garage.service";
import {environment} from "../../../../environments/environment";
declare const $:any;
@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent implements OnInit {

  messageError!:string;
  garages!:Garage[];
  garageEdit!:Garage;
  urlImage:any="http://localhost:8000";

  constructor(private serviceGarage:GarageService) { }


  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
    this.serviceGarage.getAll().subscribe({
      next:(data)=>{
        this.garages=data;
      },
      error:(error)=>{
        this.messageError=error;
      }
    })
  }
  bloquer(id: number) {

    let statu=!this.garageEdit.etat
    console.log('etat garage',statu);
  }
  delete(id:number){
    this.serviceGarage.delete(id).subscribe({
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
