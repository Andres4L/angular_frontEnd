import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientesModel } from '../model/clientesModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<ClientesModel[]>{
    return this.httpClient.get<ClientesModel[]>('http://localhost:8080/api/clientes').pipe(map(res => res)) ;
  }

  save(cliente: ClientesModel): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/api/clientes', cliente).pipe(map(res => res)) ;
  }

  update(cliente: ClientesModel): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/api/clientes', cliente).pipe(map(res => res)) ;
  }

  getCliente(id: number): Observable<ClientesModel>{
    return this.httpClient.get<ClientesModel>('http://localhost:8080/api/clientes/' + id).pipe(map(res => res)) ;
  }
}
