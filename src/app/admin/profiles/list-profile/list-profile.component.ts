import { Component, OnInit } from '@angular/core';
import {Profile} from "../../../models/profile.model";
import {ProfileServiceService} from "../../../services/profiles/profile-service.service";

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  messageError!:string;
  profiles!:Profile[];

  constructor(private serviceProfile:ProfileServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
    this.serviceProfile.getAllProfile()
      .subscribe({
        next:(data)=>{
          this.profiles=data;
          console.log('data',data);
        },
        error:(error)=>{
          console.log('error',error);
          this.messageError=error;
         }
      })
  }

  delete(id:number){
    this.serviceProfile.deleteProfile(id).subscribe({
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
