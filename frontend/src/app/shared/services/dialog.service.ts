import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ChatComponent } from 'src/app/chat/chat.component';
import { DialogBatePapoComponent } from 'src/app/horario/dialog-bate-papo/dialog-bate-papo.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ChatComponent>) { }

  openDialogMensagens(): void {
    this.dialog.open(ChatComponent, {
    });
  }

}