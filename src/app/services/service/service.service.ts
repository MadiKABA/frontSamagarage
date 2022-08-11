import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Profile} from "../../models/profile.model";
import {catchError, Observable, pipe, throwError} from "rxjs";
import {Service} from "../../models/service.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private host=environment.hostServices;
  constructor( private http:HttpClient) { }

  //tout les service
  getAll(){
    return this.http.get<Service[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  /*Savugarder un service*/
  public save(service:Service):Observable<Service>{
    return this.http.post<Service>(this.host,service)
      .pipe(
        catchError(this.handleError)
      )
  }

  public get(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }

  /*Modification de profile*/
  public update(id:number,service:Service):Observable<any>{
    return this.http.put(this.host+"/"+id,service)
    pipe(
      catchError(this.handleError)
    )
  }
  public delete(id:number){
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
