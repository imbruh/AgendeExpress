import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/shared/services/horario.service';
import { HorarioCadastrarDTO } from 'src/app/shared/model/horarioCadastrarDTO';
import { Router } from '@angular/router';
<<<<<<< HEAD
import {MensagemService} from "../../shared/services/mensagem.service";
import {HorarioDTO} from "../../shared/model/horarioDTO";
=======
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
>>>>>>> 8a47d79ae9ca98aeb89000255eb2ffee83973b0a

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
  cliente = new Cliente()

<<<<<<< HEAD
  constructor(private horarioService: HorarioService, private roteador: Router, private mensagemService: MensagemService) { }
=======
  constructor(private horarioService: HorarioService,private clienteService: ClienteService, private roteador: Router) { }
>>>>>>> 8a47d79ae9ca98aeb89000255eb2ffee83973b0a

  ngOnInit() {
    this.listarHorariosDisponiveis();
    let clienteLogadoId = localStorage.getItem("cliente");
    if (clienteLogadoId != undefined && clienteLogadoId != "0"){
        this.clienteService.pesquisarPorID(parseInt(clienteLogadoId)).subscribe(
            cliente =>{
                this.cliente=cliente;
            }
        )
      }else{
          this.roteador.navigate([""])
      }
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
<<<<<<< HEAD

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
=======
    let dataFormatada = this.horarioService.formatarDataHora(this.data);
    let dataHora = dataFormatada.slice(0,11) 
    console.log(this.hora)
    console.log(parseInt(this.hora) < 10)
    dataHora += parseInt(this.hora) < 10 ? '0' + parseInt(this.hora.slice(0,2)): parseInt(this.hora.slice(0,2));
    dataHora += ':00:00';
    // console.log(dataHora)
    let horarioDTO = new HorarioCadastrarDTO();
    horarioDTO.dataHora = dataHora;
    horarioDTO.idCliente = this.cliente.id;

    this.horarioService.cadastrarHorario(horarioDTO).subscribe(
      horario => {
        // this.horarioService.listarHorarioPorDia(this.horarioService.formatarDataHora(new Date))
        location.reload()
      }
    );
>>>>>>> 8a47d79ae9ca98aeb89000255eb2ffee83973b0a
  }


