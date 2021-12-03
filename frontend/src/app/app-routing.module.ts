import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHorarioComponent } from './horario/listar-horario/listar-horario.component';
import {CadastroClienteComponent} from "./cadastro/cadastro-cliente/cadastro-cliente.component";
import {CadastroEmpresaComponent} from "./cadastro/cadastro-empresa/cadastro-empresa.component";
import {ListagemClienteComponent} from "./cadastro/listagem-cliente/listagem-cliente.component";
import {ListagemEmpresaComponent} from "./cadastro/listagem-empresa/listagem-empresa.component";

const routes: Routes = [
  {
    path: 'telaInicial',
    component: ListarHorarioComponent,
  },
  {
    path: 'cadastro-cliente',
    component: CadastroClienteComponent
  },
  {
    path: 'cadastro-empresa',
    component: CadastroEmpresaComponent
  },
  {
    path: 'listagem-cliente',
    component: ListagemClienteComponent
  },
  {
    path: 'listagem-empresa',
    component: ListagemEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
