import { Component, OnInit } from '@angular/core';
import {ZoneServiceService} from "../../services/zone/zone-service.service";
import {Zone} from "../../models/Zone.model";

@Component({
  selector: 'app-trouver-un-garage',
  templateUrl: './trouver-un-garage.component.html',
  styleUrls: ['./trouver-un-garage.component.css']
})
export class TrouverUnGarageComponent implements OnInit {
  messageError!:string;
  zones!:Zone[];
  constructor(private serviceZone:ZoneServiceService) { }
  ngOnInit(): void {
      this.getAll()
  }
  public getAll(){
    this.serviceZone.getAllZones()
      .subscribe({
        next:(data)=>{
          this.zones=data;
          console.log('data',data);
        },
        error:(error)=>{
          console.log('error',error);
          this.messageError=error;
        }
      })
  }

  changeZone(event:any) {
    console.log(event.target.value)
  }
}
