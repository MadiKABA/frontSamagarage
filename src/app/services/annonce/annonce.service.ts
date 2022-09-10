import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Garage} from "../../models/garage.model";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Annonce} from "../../models/annonce";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private host=environment.hostAnnonce;
  constructor(private http:HttpClient) { }
  getAll():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
  }
  public cloturer(id:number):Observable<any>{
    return this.http.get("http://localhost:8000/api/annonces/cloture/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
  /*Savugarder un garage*/
  public save(annonce:any):Observable<any>{
    return this.http.post<any>(this.host,annonce)
      .pipe(
        catchError(this.handleError)
      )
  }
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
