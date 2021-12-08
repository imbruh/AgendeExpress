import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/cliente";
import {Observable} from "rxjs";
import { ClienteAtualizarDTO } from '../model/clienteAtualizarDTO';
import { ClienteCadastrarDTO } from '../model/clienteCadastrarDTO';
import { ClienteLoginDTO } from '../model/clienteLoginDTO';

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

  pesquisarPorID(id: Number): Observable<ClienteAtualizarDTO> {
    return this.httpClient.get<ClienteAtualizarDTO>(`${this.URL_USUARIO}/pesquisarPorId?id=${id}`);
  }

  atualizar(clienteAtualizarDTO: ClienteAtualizarDTO): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.URL_USUARIO}/atualizar`, clienteAtualizarDTO);
  }

  apagarConta(id:Number): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(`${this.URL_USUARIO}/apagar?id=${id}`);
  }

  login(clienteLogin: ClienteLoginDTO): Observable<any> {
    return this.httpClient.post<any>(`${this.URL_USUARIO}/login`, clienteLogin)
  }

}
