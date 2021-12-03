import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/cliente";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_USUARIO = 'http://localhost:3000/cliente';

constructor(private httpClient: HttpClient) {
}

cadastrarCliente(cliente: Cliente): Observable<Cliente> {
  return this.httpClient.post<Cliente>(this.URL_USUARIO, cliente);
}

listar(): Observable<Cliente[]> {
  return this.httpClient.get<Cliente[]>(this.URL_USUARIO);
}

remover(id: number): Observable<object> {
  return this.httpClient.delete(`${this.URL_USUARIO}/${id}`)
}

pesquisarPorID(id: Number): Observable<Cliente> {
  return this.httpClient.get<Cliente>(`${this.URL_USUARIO}/${id}`);
}

atualizar(cliente: Cliente): Observable<Cliente> {
  return this.httpClient.put<Cliente>(`${this.URL_USUARIO}/${cliente.id}`, cliente);
}
}
