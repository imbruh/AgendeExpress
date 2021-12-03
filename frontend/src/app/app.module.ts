import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorarioModule } from './horario/horario.module';
import { AppRoutingModule } from './app-routing.module';
import { CadastroClienteComponent } from './cadastro/cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpresaComponent } from './cadastro/cadastro-empresa/cadastro-empresa.component';
import {CadastroModule} from "./cadastro/cadastro.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CadastroClienteComponent,
    CadastroEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HorarioModule,
    CadastroModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
