import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamApi {

  private baseUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) { }

  //Obtener el nombre y el numero de pagina a traves de la API
     getAllCharacters(page: number = 1, name: string = ''): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`, {
      params: {
        page: page.toString(),
        name
      }
    });
  }

    //Obtener un personaje especifico por ID
    getCharacterForId(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/character/${id}`)
    }
}
