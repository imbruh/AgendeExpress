import { Injectable } from '@angular/core';
import {Empresa} from "../model/empresa";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { EmpresaAtualizarDTO } from '../model/empresaAtualizarDTO';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  URL_EMPRESA = 'http://localhost:8080/empresa';
  constructor(private httpClient: HttpClient) {
  }

  cadastrarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(`${this.URL_EMPRESA}/cadastrar`, empresa);
  }

  listar(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(`${this.URL_EMPRESA}/listar`);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_EMPRESA}/apagar?id=${id}`)
  }

  atualizar(empresaAtualizarDTO: EmpresaAtualizarDTO): Observable<Empresa> {
    return this.httpClient.put<Empresa>(`${this.URL_EMPRESA}/atualizar`, empresaAtualizarDTO);
  }

  pesquisarPorID(id: Number): Observable<EmpresaAtualizarDTO> {
    return this.httpClient.get<EmpresaAtualizarDTO>(`${this.URL_EMPRESA}/pesquisarPorId?id=${id}`);
  }

}
