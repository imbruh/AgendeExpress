import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/cliente";
import {Observable} from "rxjs";
import { ClienteAtualizarDTO } from '../model/clienteAtualizarDTO';
import { ClienteCadastrarDTO } from '../model/clienteCadastrarDTO';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_USUARIO = 'http://localhost:8080/cliente';

constructor(private httpClient: HttpClient) {
}

cadastrarCliente(clienteCadastrarDTO: ClienteCadastrarDTO): Observable<Boolean> {
  return this.httpClient.post<Boolean>(`${this.URL_USUARIO}/cadastrar`, clienteCadastrarDTO);
}

// listar(): Observable<Cliente[]> {
//   return this.httpClient.get<Cliente[]>(this.URL_USUARIO);
// }

remover(id: number): Observable<object> {
  return this.httpClient.delete(`${this.URL_USUARIO}/apagar/?id=${id}`)
}

// pesquisarPorID(id: Number): Observable<Cliente> {
//   return this.httpClient.get<Cliente>(`${this.URL_USUARIO}/${id}`);
// }

atualizar(clienteAtualizarDTO: ClienteAtualizarDTO): Observable<Boolean> {
  return this.httpClient.put<Boolean>(`${this.URL_USUARIO}/atualizar`, clienteAtualizarDTO);
}

}
