import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { ListagemEmpresaComponent } from './listagem-empresa/listagem-empresa.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [


    ListagemClienteComponent,
    ListagemEmpresaComponent
  ],
  exports: [
    ListagemClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
