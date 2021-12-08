import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteLoginDTO } from 'src/app/shared/model/clienteLoginDTO';
import { EmpresaLoginDTO } from 'src/app/shared/model/empresaLoginDTO';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { EmpresaService } from 'src/app/shared/services/empresa.service';
import {MensagemService} from "../shared/services/mensagem.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente = new ClienteLoginDTO();
  empresa = new EmpresaLoginDTO();
  loginCliente = true;
  empresas: any = []

  constructor(private clienteService: ClienteService, private empresaService: EmpresaService, private router: Router, private mensagemService: MensagemService) { }

  ngOnInit() {
    this.listarEmpresas();
  }

  trocarUsuario() {
    if(this.loginCliente){
      this.loginCliente = false;
    }
    else {
      this.loginCliente = true;
    }
  }

  login() {
    if(this.cliente.nomeUsuario==undefined || this.cliente.senha==undefined) {
      this.mensagemService.snackAviso('Preencha todos os campos!');}
    else {
      if(this.loginCliente){
        this.clienteService.login(this.cliente).subscribe(
          cliente => {
            if(cliente.id != undefined) {
              localStorage.setItem("cliente",cliente.id.toString())
              this.router.navigate(['inicio']);
              this.mensagemService.snackSucesso("Login Efetuado")
            }
            else {
              this.cliente = new ClienteLoginDTO();
              this.mensagemService.snackErro('Usuario ou Senha Inválido!')

            }
          }
        )
      }
      else {
        this.empresaService.login(this.empresa).subscribe(
          empresa => {

          }
        )
      }
    }
    }


  listarEmpresas() {
    this.empresaService.listar().subscribe(
      empresa => {
        this.empresas = empresa
      }
    )
  }

}
