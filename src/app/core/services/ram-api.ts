import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamApi {

  private baseUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) { }


    //Obtener todos los personajes de la API
    getAllCharacters(page: number = 1): Observable<any> {
        return this.http.get(`${this.baseUrl}/character?page= ${page}`);
    }

    //Obtener un personaje especifico por ID
    getCharacterForId(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/character/${id}`)
    }
}
