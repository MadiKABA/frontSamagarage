import { Component, OnInit } from '@angular/core';
import {Service} from "../../../models/service.model";
import {ServiceService} from "../../../services/service/service.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  messageError!:string;
  services!:Service[];
  id:any;
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(){
      this.serviceService.getAll().subscribe({
        next:(data)=>{
          this.services=data;
        },
        error:(error)=>{
          console.log('error',error);
          this.messageError=error;
        }
      })
  }

  delete(id:number) {

  }
}
