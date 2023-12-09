import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuarioModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }
  
  getUsuarios(): Observable<UsuarioModel[]>{
    return this.httpClient.get<UsuarioModel[]>('http://localhost:8080/api/usuarios').pipe(map(res => res)) ;
  }

  save(usuario: UsuarioModel): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/api/usuarios', usuario).pipe(map(res => res)) ;
  }

  update(usuario: UsuarioModel): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/api/usuarios', usuario).pipe(map(res => res)) ;
  }
}

