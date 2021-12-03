import { Injectable } from '@angular/core';
import {Empresa} from "../model/empresa";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  URL_EMPRESA = 'http://localhost:3000/empresa';
  constructor(private httpClient: HttpClient) {
  }

  cadastrarEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.URL_EMPRESA, empresa);
  }

  listar(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.URL_EMPRESA);
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_EMPRESA}/${id}`)
  }

  pesquisarPorID(id: Number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(`${this.URL_EMPRESA}/${id}`);
  }


  atualizar(empresa: Empresa): Observable<Empresa> {
    return this.httpClient.put<Empresa>(`${this.URL_EMPRESA}/${empresa.id}`, empresa);
  }
}
