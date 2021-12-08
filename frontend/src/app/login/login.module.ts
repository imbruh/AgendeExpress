import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent} from 'src/app/login/cliente/cliente.component'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LayoutsModule } from '../layouts/layouts.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    LayoutsModule,
    RouterModule
  ],
  declarations: [ClienteComponent]
})
export class LoginModule { }
