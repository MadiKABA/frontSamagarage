import { Component, OnInit } from '@angular/core';
import {Garage} from "../../models/garage.model";
import {GarageService} from "../../services/garage/garage.service";
import {ActivatedRoute} from "@angular/router";
import {ZoneServiceService} from "../../services/zone/zone-service.service";
import {Zone} from "../../models/Zone.model";

@Component({
  selector: 'app-list-garages',
  templateUrl: './list-garages.component.html',
  styleUrls: ['./list-garages.component.css']
})
export class ListGaragesComponent implements OnInit {
  messageError!:string;
  id!:number;
  zone!:Zone;
  urlImage:any="http://localhost:8000";
  constructor(
    private serviceGarage:GarageService,
    private route: ActivatedRoute,
    private serviceZone:ZoneServiceService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOneZone(this.id);
  }
  public getOneZone(id:number){
    this.serviceZone.getOneZone(id)
      .subscribe({
        next:(data)=>{
          this.zone=data;
          console.log(this.zone.garages);
        },
        error:(error)=>{
          console.log('error',error);
          this.messageError=error;
        }
      })
  }
}
