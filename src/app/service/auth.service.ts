import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuarioModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(usuario: UsuarioModel): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/auth', usuario);
  }
}
