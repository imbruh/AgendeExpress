import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HorarioCadastrarDTO } from '../model/horarioCadastrarDTO';
import { HorarioDTO } from '../model/horarioDTO';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  
  URL_HORARIO = 'http://localhost:8080/horario';

constructor(private httpClient: HttpClient) { }

  formatarDataHora(data: Date): String {
    let ano = data.getFullYear();
    let mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth();
    let dia = data.getDay() < 10 ? "0" + data.getDay() : data.getDay();
    return `${ano}-${mes}-${dia}T00:00:00`;
  }

  listarHorarioPorDia(data: String): Observable<HorarioDTO[]>{
    return this.httpClient.get<HorarioDTO[]>(`${this.URL_HORARIO}/listar?dataHora=${data}`);
  }

  filtrarHorarioDisponivel(data: String): Observable<String[]>{
    return this.httpClient.get<String[]>(`${this.URL_HORARIO}/filtrar-horario?data=${data}`);
  }

  cadastrarHorario(horarioCadastrarDTO: HorarioCadastrarDTO): Observable<String>{
    return this.httpClient.post<String>(`${this.URL_HORARIO}/cadastrar`, horarioCadastrarDTO);
  }
}
