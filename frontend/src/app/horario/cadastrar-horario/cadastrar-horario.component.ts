import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/shared/services/horario.service';
import { HorarioCadastrarDTO } from 'src/app/shared/model/horarioCadastrarDTO';

@Component({
  selector: 'app-cadastrar-horario',
  templateUrl: './cadastrar-horario.component.html',
  styleUrls: ['./cadastrar-horario.component.css']
})
export class CadastrarHorarioComponent implements OnInit {

  horariosDisponiveis: Array<String> = [];
  data = new Date();
  hora = '';

  constructor(private horarioService: HorarioService) { }

  ngOnInit() {
    this.listarHorariosDisponiveis();
  }

  listarHorariosDisponiveis() {
    console.log(this.data)
    this.horarioService.filtrarHorarioDisponivel(this.horarioService.formatarDataHora(this.data)).subscribe(
      horarios => {
        this.horariosDisponiveis = horarios,
        console.log(this.horariosDisponiveis)
      }
    );
  
  }

  alterarHora(hora: any) {
    this.hora = hora;
  }

  cadastrar() {
    let dataFormatada = this.horarioService.formatarDataHora(this.data);
    let dataHora = dataFormatada.slice(0,11) 
    console.log(this.hora)
    console.log(parseInt(this.hora) < 10)
    dataHora += parseInt(this.hora) < 10 ? '0' + this.hora: this.hora;
    dataHora += ':00:00';
    console.log(dataHora)
    let horarioDTO = new HorarioCadastrarDTO();
    horarioDTO.dataHora = dataHora;
    horarioDTO.idCliente = 1;

    this.horarioService.cadastrarHorario(horarioDTO).subscribe(
      () => {}
    );
  }

}
