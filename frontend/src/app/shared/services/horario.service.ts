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

  listarHorarioPorDia(data: String): Observable<HorarioDTO[]>{
    return this.httpClient.get<HorarioDTO[]>(`${this.URL_HORARIO}/listar?dataHora=${data}`);
  }

  filtrarHorarioDisponivel(data: string): Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.URL_HORARIO}/filtrar-horario?data=${data}`);
  }

  cadastrarHorario(horarioCadastrarDTO: HorarioCadastrarDTO): Observable<void>{
    return this.httpClient.post<void>(`${this.URL_HORARIO}/cadastrar`, horarioCadastrarDTO);
  }
}
