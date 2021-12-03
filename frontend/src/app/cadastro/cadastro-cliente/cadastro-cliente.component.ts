import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../shared/model/cliente";
import {ClienteService} from "../../shared/services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  cliente: Cliente;
  clientes: Array<Cliente>;

  constructor(private clienteService: ClienteService,private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new Cliente();
    this.clientes = new Array<Cliente>();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.clienteService.pesquisarPorID(idParaEdicao).subscribe(
        clienteRetornado => this.cliente = clienteRetornado
      );

    }
  }


  ngOnInit(): void {
    this.listar()
  }
  listar() {
    this.clienteService.listar().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }
  cadastrarCliente (): void{
    if (this.cliente.id) {
      this.clienteService.atualizar(this.cliente).subscribe(
        alunoAlterado => {
          console.log(alunoAlterado);
          this.roteador.navigate(['listagem-aluno']);
        }
      )
    }else {
      this.clienteService.cadastrarCliente(this.cliente).subscribe(
        clienteCadastrado =>  {
          console.log(clienteCadastrado)
          this.roteador.navigate(['listagem-cliente'])
        }
      );

      this.cliente = new Cliente();
    }

  }
}
