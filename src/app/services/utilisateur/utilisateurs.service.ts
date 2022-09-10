import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, pipe, throwError} from "rxjs";
import {Utilisateur} from "../../models/utilisateur.model";
import {Profile} from "../../models/profile.model";


@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  private host=environment.hostUtilisateur;

  constructor(private http:HttpClient) { }

  getAllUtilisateurs():Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  //la gestion des erreur.
  private handleError(error: HttpErrorResponse) {
    let messageError = ''
    if (error.status === 0) {
      //errur coter client
      messageError = error.error.message;
    } else {
      //Erreur du backend
      // console.log(error.error.message)
      messageError = error.error.message
    }
    return throwError(() => new Error(messageError));
  }

  /*La methode pour enregistrer un etudinat*/
  public saveUtilisateurs(utilisateurs:Utilisateur):Observable<Utilisateur[]>{
    return this.http.post<Utilisateur[]>(this.host,utilisateurs)
      .pipe(
        catchError(this.handleError)
      )
  }
  //recuperation d;un utilisateurs
  public getOneUser(id:number):Observable<any>{
    return this.http.get(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*Modification de utilisateurs*/
  public updateUser(id:number,profile:Profile):Observable<any>{
    return this.http.put(this.host+"/"+id,profile)
    pipe(
      catchError(this.handleError)
    )
  }

  public deleteUser(id:bigint){
    return this.http.delete(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
}
