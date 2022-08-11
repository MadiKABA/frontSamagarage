import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, pipe, throwError} from "rxjs";
import {Zone} from "../../models/Zone.model";
import {Profile} from "../../models/profile.model";


@Injectable({
  providedIn: 'root'
})
export class ZoneServiceService {

  private host=environment.hostZones;
  constructor( private http:HttpClient) { }

  //tout les profile
  getAllZones():Observable<Zone[]>{
    return this.http.get<Zone[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*Savugarder une categorie*/
  public saveZone(zone:Zone):Observable<Zone>{
    alert("save");
    return this.http.post<Zone>(this.host,zone)
      .pipe(
        catchError(this.handleError)
      )
  }

  public getOneZone(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }

  /*Modification de profile*/
  public updateZone(id:number,zone:Zone):Observable<any>{
    return this.http.put(this.host+"/"+id,zone)
    pipe(
      catchError(this.handleError)
    )
  }
  public deleteZone(id:number){
    return this.http.delete(this.host+"/"+id)
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
}
