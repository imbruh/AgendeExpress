import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';
import { ListagemEmpresaComponent } from './listagem-empresa/listagem-empresa.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';


@NgModule({
  declarations: [
    CadastroClienteComponent,
    CadastroEmpresaComponent,
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
