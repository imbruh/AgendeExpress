import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHorarioComponent } from './listar-horario/listar-horario.component';
import { CadastrarHorarioComponent } from './cadastrar-horario/cadastrar-horario.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ListarHorarioComponent,
    CadastrarHorarioComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HorarioModule { }
