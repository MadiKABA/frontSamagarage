import { Component, OnInit } from '@angular/core';
import {Garage} from "../../models/garage.model";
import {GarageService} from "../../services/garage/garage.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NoteService} from "../../services/notes/note.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {yearsPerCalendar} from "ngx-bootstrap/datepicker/engine/format-years-calendar";


@Component({
  selector: 'app-details-garage',
  templateUrl: './details-garage.component.html',
  styleUrls: ['./details-garage.component.css']
})
export class DetailsGarageComponent implements OnInit {
  id!:number;
  messageError!:string
  garage!:Garage;
  addNote!:FormGroup
  urlImage:any="http://localhost:8000";
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;
  nbreAvis:any;
  moyenneAvis:any;
  totalAvis:any;
  constructor(
    private serviceGarage:GarageService,
    private serviceNote:NoteService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
  ) { }

  countStar(star:any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.get(this.id);
    this.addNote=this.fb.group({
      commentaire:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(10)]],
      email:['',[Validators.required,Validators.pattern(/[a-zA-Z]/),Validators.minLength(10)]],
      telephone:['',[Validators.required,Validators.pattern(/[0-9]/),Validators.minLength(11)]],
      nomClient:['',[Validators.required,Validators.pattern(/[[a-zA-Z]]/),Validators.minLength(7)]],
      note:[''],
      garage_id:this.id,
    })

  }


  get(id:number){
    this.serviceGarage.getOneGarage(id).subscribe({
      next:(data)=>{
        this.garage=data;
        let sommeNote=0;
        console.log(this.garage);
        let nmbreNote=this.garage.notes.map(n=>{
          return sommeNote+=n.note;
        })
        let nbAvis=this.garage.notes.length;
        this.totalAvis=nmbreNote.pop();
        this.moyenneAvis=this.totalAvis/nbAvis;
        this.nbreAvis=nbAvis;
        console.log('le nombre de note',nbAvis,'total: ',this.moyenneAvis);

      },
      error:(error)=>{
        this.messageError=error;
      }
    })
  }
  saveNote(){
    this.addNote.value.note=this.selectedValue;
    console.log(this.addNote.value);
    console.log(this.selectedValue);
    this.serviceNote.save(this.addNote.value).subscribe(
      {
        next:(data)=>{
          this.addNote.reset({})
          this.ngOnInit();
        },
        error:(error)=>{
          this.messageError=error;
        }
      }
    )
  }
  get controleSaisie(){
    return this.addNote.controls;
  }

}
