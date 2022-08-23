import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, pipe, throwError} from "rxjs";
import {Profile} from "../../models/profile.model";
import {Garage} from "../../models/garage.model";

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private host=environment.hostGarages;
  constructor( private http:HttpClient) { }

  //tout les garages
  getAll():Observable<Garage[]>{
    return this.http.get<Garage[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*Savugarder un garage*/
  public saveGarage(garage:any):Observable<any>{
    alert("save")
    return this.http.post<any>(this.host,garage)
      .pipe(
        catchError(this.handleError)
      )
  }
  //la gestion des erreur.
  private handleError(error: HttpErrorResponse) {
    let messageError=''
    if (error.status === 0) {
      //errur coter client
      messageError=error.error.message;
    } else {
      //Erreur du backend
      // console.log(error.error.message)
      messageError=error.error.message
    }
    // Return return l'eurr sur l'interface utilisateur.

    return throwError(() => new Error(messageError));
  }

  getLocation():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lat:resp.coords.latitude,long:resp.coords.longitude})
      })
    })
  }
  public getOneGarage(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }

  public update(id:number,garage:any):Observable<any>{
    return this.http.put(this.host+"/"+id,garage)
    pipe(
      catchError(this.handleError)
    )
  }
}
