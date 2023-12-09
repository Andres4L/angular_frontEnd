import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosModel } from '../model/productosModel';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private httpClient: HttpClient) { }

  getProductos(): Observable<ProductosModel[]>{
    return this.httpClient.get<ProductosModel[]>('http://localhost:8080/api/products').pipe(map(res => res)) ;
  }

  save(producto: ProductosModel): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8080/api/products', producto).pipe(map(res => res)) ;
  }

  update(producto: ProductosModel): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/api/products', producto).pipe(map(res => res)) ;
  }

  getProducto(id: number): Observable<ProductosModel>{
    return this.httpClient.get<ProductosModel>('http://localhost:8080/api/products/' + id).pipe(map(res => res)) ;
  }
}
