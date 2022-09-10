import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Annonce} from "../../models/annonce";
import {TypeAnnonce} from "../../models/typeAnnonce";

@Injectable({
  providedIn: 'root'
})
export class TypeAnnoceService {

  private host=environment.hostTypeAnnonce;
  constructor(private http:HttpClient) { }
  getAll():Observable<TypeAnnonce[]>{
    return this.http.get<TypeAnnonce[]>(`${this.host}`)
      .pipe(
        catchError(this.handleError)
      );
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
