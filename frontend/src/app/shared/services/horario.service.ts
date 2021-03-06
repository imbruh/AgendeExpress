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

  formatarDataHora(data: Date): string {
    let ano = data.getFullYear();
    let mes = data.getMonth()+1 < 10 ? "0" + data.getMonth()+1 : data.getMonth()+1;
    let dia = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
    return `${ano}-${mes}-${dia}T00:00:00`;
  }

  formatarHora(horarios:Array<string>): Array<string>{
    let horasFormatadas = [];
    for(let hr of horarios){
        if (parseInt(hr) < 10){
          let horaFormatada = "0"+hr;  
          hr=horaFormatada;
        }
        horasFormatadas.push(hr)
    }
    return horasFormatadas;
  }

  listarHorarioPorDia(data: String, idEmpresa: number): Observable<HorarioDTO[]>{
    return this.httpClient.get<HorarioDTO[]>(`${this.URL_HORARIO}/listar?dataHora=${data}&idEmpresa=${idEmpresa}`);
  }

  filtrarHorarioDisponivel(data: string, idEmpresa: number): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.URL_HORARIO}/filtrar-horario?data=${data}&idEmpresa=${idEmpresa}`);
  }

  cadastrarHorario(horarioCadastrarDTO: HorarioCadastrarDTO): Observable<void>{
    return this.httpClient.post<void>(`${this.URL_HORARIO}/cadastrar`, horarioCadastrarDTO);
  }

  buscarHorarioPorCliente(idCliente: number, idEmpresa: number): Observable<HorarioDTO[]> {
    return this.httpClient.get<HorarioDTO[]>(`${this.URL_HORARIO}/buscar-horario-por-cliente?idCliente=${idCliente}&idEmpresa=${idEmpresa}`);
  }

  cancelarHorario(dataHora: string, idEmpresa: number, idCliente: number): Observable<HorarioDTO[]> {
    return this.httpClient.delete<HorarioDTO[]>(`${this.URL_HORARIO}/apagar-horario?dataHora=${dataHora}&idCliente=${idCliente}&idEmpresa=${idEmpresa}`)
  }
}
