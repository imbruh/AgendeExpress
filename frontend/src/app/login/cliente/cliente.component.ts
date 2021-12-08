import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { ClienteLoginDTO } from 'src/app/shared/model/clienteLoginDTO';
import { EmpresaLoginDTO } from 'src/app/shared/model/empresaLoginDTO';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { EmpresaService } from 'src/app/shared/services/empresa.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente = new ClienteLoginDTO();
  empresa = new EmpresaLoginDTO();
  loginCliente = true;
  empresas: any = []

  constructor(private clienteService: ClienteService, private empresaService: EmpresaService, private router: Router) { }

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
    if(this.loginCliente){
      this.clienteService.login(this.cliente).subscribe(
        cliente => {
          console.log(cliente)
          // if(cliente == undefined) { 
          //   this.cliente = new ClienteLoginDTO();
          //   // COLOCAR SNACKBAR DE CREDENCIAIS INVALIDAS
          // }
          // else {
            this.router.navigate(['inicio']);
          // }
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

  listarEmpresas() {
    this.empresaService.listar().subscribe(
      empresa => {
        this.empresas = empresa
      }
    )
  }

}
