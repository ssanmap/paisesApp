import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.eu/rest/v2';


  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<PaisResponse[]> {

     const url = `${this.apiUrl}/name/${termino}`;
     return this.http.get<PaisResponse[]>(url);
  }
  buscarCapital(termino:string): Observable<PaisResponse[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<PaisResponse[]>(url);
 }

 getPaisPorCodigo(id:string): Observable<PaisResponse> {

  const url = `${this.apiUrl}/alpha/${id}`;
  return this.http.get<PaisResponse>(url);
}

   buscarRegion(region:string): Observable<PaisResponse[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<PaisResponse[]>(url);
   }
}
