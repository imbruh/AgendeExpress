import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/model/cliente';
import { Empresa } from 'src/app/shared/model/empresa';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { EmpresaService } from 'src/app/shared/services/empresa.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cliente = new Cliente();
  empresa = new Empresa();
  logado:any;
  constructor(private clienteService:ClienteService, private empresaService:EmpresaService, private roteador: Router) { }

  ngOnInit() {
    let clienteLogadoId = localStorage.getItem("cliente");
    let empresaId = localStorage.getItem("empresa");
    let empresaLogadaId = localStorage.getItem("empresaLogada");
    if (clienteLogadoId != undefined && clienteLogadoId != "0" && empresaId != undefined && empresaId != "0"){
        this.clienteService.pesquisarPorID(parseInt(clienteLogadoId)).subscribe(
            cliente =>{
                this.cliente=cliente;
            }
        )

        this.empresaService.pesquisarPorID(parseInt(empresaId)).subscribe(
            empresa =>{
                this.empresa=empresa
            }
        )
    }else if (empresaLogadaId != undefined && empresaLogadaId != "0"){
        this.empresaService.pesquisarPorID(parseInt(empresaLogadaId)).subscribe(
            empresa =>{
                this.empresa=empresa
            }
        )
    }else{
        this.roteador.navigate([""])
    }
    
  }

  
  editar(){
    // this.cliente.id=3;
    if(this.cliente.id!=undefined){
        this.roteador.navigate(['cadastro-cliente', this.cliente.id]).then(_r => {
            // return this.clienteService;
          })
    }else{
        this.roteador.navigate(['cadastro-empresa', 1]).then(_r => {
            // return this.clienteService;
          })
    }
}

  apagarConta(){
    this.logado = new Empresa();
    if (this.logado instanceof Cliente){
        this.clienteService.apagarConta(3).subscribe(
            ()=>{
              
            }
        )
    }
    else{
        this.empresaService.remover(1).subscribe(
            ()=>{
            }
        )
    }
}
    logout(){
        localStorage.setItem("cliente","0")
        localStorage.setItem("empresa","0")
        this.roteador.navigate([""])
    }

}
