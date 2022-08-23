import { Injectable } from '@angular/core';
import {Profile} from "../../models/profile.model";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Note} from "../../models/Note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private host=environment.hostNotes;
  constructor( private http:HttpClient) { }

  /*Savugarder une categorie*/
  public save(note:Note):Observable<Note>{
    return this.http.post<Note>(this.host,note)
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
  public delete(id:number){
    return this.http.delete(this.host+"/"+id)
      .pipe(
        catchError(this.handleError)
      )
  }
}
