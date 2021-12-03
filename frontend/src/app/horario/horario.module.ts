import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHorarioComponent } from './listar-horario/listar-horario.component';
import { CadastrarHorarioComponent } from './cadastrar-horario/cadastrar-horario.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogService } from '../shared/services/dialog.service';
import { DialogBatePapoComponent } from './dialog-bate-papo/dialog-bate-papo.component';

@NgModule({
    declarations: [
        ListarHorarioComponent,
        CadastrarHorarioComponent,
        DialogBatePapoComponent
    ],
    exports: [
        ListarHorarioComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDialogModule
    ],
  providers: [
    {
      provide: MatDialogRef, 
      useValue: {}
    },
    DialogService
  ]
})
export class HorarioModule { }
