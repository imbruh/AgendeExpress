import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DialogBatePapoComponent } from '../dialog-bate-papo/dialog-bate-papo.component';

@Component({
  selector: 'app-listar-horario',
  templateUrl: './listar-horario.component.html',
  styleUrls: ['./listar-horario.component.css']
})
export class ListarHorarioComponent implements OnInit {

  constructor(public dialog: MatDialog, private dialogService: DialogService, public dialogRef: MatDialogRef<DialogService>) {}

  openDialog() {
    this.dialogService.openDialogMensagens();
  }

  ngOnInit(): void {
  }

  public horarios = [
    {
      "data": "Qua 01/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "09:00h"
    },
    {
      "data": "Qua 01/12/2021",
      "hora": "10:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    },
    {
      "data": "Qui 02/12/2021",
      "hora": "08:00h"
    }
    
  ]
}
