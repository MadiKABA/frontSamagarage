import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {Garage} from "../../../models/garage.model";
import {GarageService} from "../../../services/garage/garage.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent implements OnInit {

  messageError!:string;
  garages!:Garage[];
  urlImage:any="http://127.0.0.1:8000/public\\garage\\";
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

  delete(id: number) {

  }
}
