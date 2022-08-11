import { Component, OnInit } from '@angular/core';
import {Zone} from "../../../models/Zone.model";
import {ZoneServiceService} from "../../../services/zone/zone-service.service";

@Component({
  selector: 'app-list-zones',
  templateUrl: './list-zones.component.html',
  styleUrls: ['./list-zones.component.css']
})
export class ListZonesComponent implements OnInit {
  messageError!:string;
  zones!:Zone[];
  constructor(private serviceZone:ZoneServiceService) { }

  ngOnInit(): void {
    this.getAll();
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

  delete(id:number){
    this.serviceZone.deleteZone(id).subscribe({
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
