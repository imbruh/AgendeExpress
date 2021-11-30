import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHorarioComponent } from './horario/listar-horario/listar-horario.component';

const routes: Routes = [
  {
    path: 'telaInicial',
    component: ListarHorarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }