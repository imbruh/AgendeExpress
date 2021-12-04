import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogBatePapoComponent } from 'src/app/horario/dialog-bate-papo/dialog-bate-papo.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogBatePapoComponent>) { }

  openDialogMensagens(): void {
    this.dialog.open(DialogBatePapoComponent, {
      width: '30%'
    });
  }

}