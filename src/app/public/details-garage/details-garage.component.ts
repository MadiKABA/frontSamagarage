import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Garage} from "../../models/garage.model";
import {GarageService} from "../../services/garage/garage.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {NoteService} from "../../services/notes/note.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Observable, Subscriber } from 'rxjs';
import {
  latLng,
  tileLayer,
  Icon, icon, Marker
} from 'leaflet';

import 'leaflet';
import 'leaflet-routing-machine';
declare let L: { map: (arg0: string) => { (): any; new(): any; setView: { (arg0: number[], arg1: number): any; new(): any; }; }; tileLayer: (arg0: string, arg1: { attribution: string; maxZoom: number; id: string; tileSize: number; zoomOffset: number; accessToken: string; }) => { (): any; new(): any; addTo: { (arg0: any): void; new(): any; }; }; icon: (arg0: { iconUrl: string; shadowUrl: string; popupAnchor: number[]; }) => any; marker: (arg0: any[], arg1: { icon: any; }) => { (): any; new(): any; bindPopup: { (arg0: string): any; new(): any; }; }; Routing: { control: (arg0: { waypoints: any[]; }) => { (): any; new(): any; addTo: { (arg0: any): void; new(): any; }; }; }; latLng: (arg0: number, arg1: number) => any; };

import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-details-garage',
  templateUrl: './details-garage.component.html',
  styleUrls: ['./details-garage.component.css']
})
export class DetailsGarageComponent implements OnInit,AfterViewInit {
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
  map: any;
  logGarage!:number;
  latGarage!:number;
  startRoute!:any
  endRoute!:any
  constructor(
    private serviceGarage:GarageService,
    private serviceNote:NoteService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
  ) { }

  public ngAfterViewInit(): void {
    this.loadMap();
    this.routing();
  }

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
        this.latGarage=parseFloat(this.garage.latitude);
        this.logGarage=parseFloat(this.garage.longitude);
        console.log( this.logGarage)
        let sommeNote=0;
        console.log(this.garage);
        let nmbreNote=this.garage.notes.map(n=>{
          return sommeNote+=n.note;
        })
        let nbAvis=this.garage.notes.length;
        this.totalAvis=nmbreNote.pop();
        this.moyenneAvis=Math.round(this.totalAvis/nbAvis);
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

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }
  private loadMap(): void {

    this.map = L.map('leafletmap').setView([0, 0], 1);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: environment.mapbox.accessToken,
    }).addTo(this.map);

    this.getCurrentPosition()
      .subscribe((position: any) => {
        this.map.flyTo([position.latitude, position.longitude], 13);
        const icon = L.icon({
          iconUrl: 'assets/images/marker-icon.png',
          shadowUrl: 'assets/images/marker-shadow.png',
          popupAnchor: [13, 0],
        });
        this.startRoute=[position.latitude, position.longitude];
        console.log(this.startRoute);
        this.endRoute=[this.latGarage, this.logGarage]
        L.Routing.control({
          waypoints: [
            L.latLng(position.latitude, position.longitude),
            L.latLng(this.latGarage, this.logGarage)
          ]
        }).addTo(this.map);
      });

  }
  private routing(){
    console.log("routing",this.startRoute);

  }


}
