import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Paciente } from './paciente';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getPacientes(): Observable<Paciente[]>
  {
    const url = 'http://localhost:3000/pacientes';
 
    return this.http.get<Paciente[]>(url);
  }
}
