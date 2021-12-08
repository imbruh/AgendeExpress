import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/shared/services/horario.service';
import { HorarioCadastrarDTO } from 'src/app/shared/model/horarioCadastrarDTO';
import { Router } from '@angular/router';
import {MensagemService} from "../../shared/services/mensagem.service";
import {HorarioDTO} from "../../shared/model/horarioDTO";

@Component({
  selector: 'app-cadastrar-horario',
  templateUrl: './cadastrar-horario.component.html',
  styleUrls: ['./cadastrar-horario.component.css']
})
export class CadastrarHorarioComponent implements OnInit {
  horario!: HorarioDTO;
  horariosDisponiveis: Array<String> = [];
  data = new Date();
  hora = '';

  constructor(private horarioService: HorarioService, private roteador: Router, private mensagemService: MensagemService) { }

  ngOnInit() {
    this.listarHorariosDisponiveis();
  }

  listarHorariosDisponiveis() {
    console.log(this.data)
    this.horarioService.filtrarHorarioDisponivel(this.horarioService.formatarDataHora(this.data)).subscribe(
      horarios => {
        this.horariosDisponiveis = this.horarioService.formatarHora(horarios),
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
      dataHora += parseInt(this.hora) < 10 ? '0' + parseInt(this.hora.slice(0,2)): parseInt(this.hora.slice(0,2));
      dataHora += ':00:00';
      // console.log(dataHora)
      let horarioDTO = new HorarioCadastrarDTO();
      horarioDTO.dataHora = dataHora;
      horarioDTO.idCliente = 3;

      this.horarioService.cadastrarHorario(horarioDTO).subscribe(
        horario => {
          // this.horarioService.listarHorarioPorDia(this.horarioService.formatarDataHora(new Date))
          location.reload()
        }
      );
    }
  }


