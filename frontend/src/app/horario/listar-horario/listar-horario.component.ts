import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { Empresa } from 'src/app/shared/model/empresa';
import { HorarioDTO } from 'src/app/shared/model/horarioDTO';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { HorarioService } from 'src/app/shared/services/horario.service';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listar-horario.component.html',
  styleUrls: ['./listar-horario.component.css']
})
export class ListarHorarioComponent implements OnInit {
  cliente =  new Cliente();
  empresa = new Empresa();
  hoje = new Date();
  horarios: Array<HorarioDTO> = [];

  constructor(public dialog: MatDialog, private dialogService: DialogService, private horarioService: HorarioService, public dialogRef: MatDialogRef<DialogService>, private roteador: Router) {}

  openDialogMensagem() {
    this.dialogService.openDialogMensagens();
  }

  openDialogCadastroHorario() {
    this.dialogService.openDialogCadastrarHorario();
  }

  ngOnInit(): void {
    // this.listarHorariosPorDia();
    this.horarioService.listarHorarioPorDia(this.horarioService.formatarDataHora(this.hoje)).subscribe(
      horario => {
        this.horarios = horario;
        console.log('a')
      }
    )
  }

  listarHorariosPorDia() {
    this.horarioService.listarHorarioPorDia(this.horarioService.formatarDataHora(this.hoje)).subscribe(
      horario => {
        this.horarios = horario;
      }
    ) 
  }

  // public horarios = [
  //   {
  //     "data": "Qua 01/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qua 01/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qua 01/12/2021",
  //     "hora": "09:00h"
  //   },
  //   {
  //     "data": "Qua 01/12/2021",
  //     "hora": "10:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   },
  //   {
  //     "data": "Qui 02/12/2021",
  //     "hora": "08:00h"
  //   }
    
  // ]
}
