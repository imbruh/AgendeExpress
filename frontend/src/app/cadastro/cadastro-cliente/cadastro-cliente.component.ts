import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../shared/model/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";
import { ClienteCadastrarDTO } from 'src/app/shared/model/clienteCadastrarDTO';
import { ClienteAtualizarDTO } from 'src/app/shared/model/clienteAtualizarDTO';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  cliente: ClienteCadastrarDTO;
  clientes: Array<ClienteCadastrarDTO>;
  clienteAtualizar:ClienteAtualizarDTO;

  constructor(private clienteService: ClienteService,private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new ClienteCadastrarDTO();
    this.clientes = new Array<ClienteCadastrarDTO>();
    this.clienteAtualizar = new ClienteAtualizarDTO;
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.clienteService.pesquisarPorID(idParaEdicao).subscribe(
        clienteRetornado => this.clienteAtualizar = clienteRetornado
      );
    }
  }

  ngOnInit(): void {
    
  }
  
  cadastrarCliente (): void{
    // if (this.cliente.id) {
    //   this.clienteService.atualizar(this.cliente).subscribe(
    //     alunoAlterado => {
    //       console.log(alunoAlterado);
    //       this.roteador.navigate(['listagem-aluno']);
    //     }
    //   )
    // }else {
    console.log(this.cliente)
    this.clienteService.cadastrarCliente(this.cliente).subscribe(
      clienteCadastrado =>  {
        console.log(clienteCadastrado)
        this.roteador.navigate([''])
      }
    );

    this.cliente = new ClienteCadastrarDTO();
  }

  atualizarCliente(){
      this.clienteService.atualizar(this.clienteAtualizar).subscribe(()=>{
          //atualizar "session"
      })
  }

}
