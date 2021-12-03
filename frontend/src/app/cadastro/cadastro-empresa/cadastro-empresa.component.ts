import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmpresaService} from "../../shared/services/empresa.service";
import {Empresa} from "../../shared/model/empresa";

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  empresa: Empresa;
  empresas: Array<Empresa>;

  constructor(private empresaService: EmpresaService,private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.empresa = new Empresa();
    this.empresas = new Array<Empresa>();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.empresaService.pesquisarPorID(idParaEdicao).subscribe(
        empresaRetornado => this.empresa = empresaRetornado
      );

    }
  }


  ngOnInit(): void {
    this.listar()
  }
  listar() {
    this.empresaService.listar().subscribe(
      empresas => {
        this.empresas = empresas;
      }
    )
  }
  cadastrarEmpresa (): void{
    if (this.empresa.id) {
      this.empresaService.atualizar(this.empresa).subscribe(
        empresaAlterado => {
          console.log(empresaAlterado);
          this.roteador.navigate(['listagem-empresa']);
        }
      )
    }else {
      this.empresaService.cadastrarEmpresa(this.empresa).subscribe(
        empresaCadastrado =>  {
          console.log(empresaCadastrado)
          this.roteador.navigate(['listagem-empresa'])
        }
      );

      this.empresa = new Empresa();
    }

  }
}
