package br.edu.ifpb.agendeexpress.AgendeExpress.Controller;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.EmpresaAtualizarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Empresa;
import br.edu.ifpb.agendeexpress.AgendeExpress.Service.EmpresaService;

@RestController
@RequestMapping(value = "/empresa")
public class EmpresaController {

	@Autowired
	private EmpresaService empresaService;
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Boolean> cadastrar(@RequestBody Empresa empresa){
		return ResponseEntity.ok(this.empresaService.cadastrar(empresa)); 
	}
	
	@DeleteMapping("/apagar")
	public ResponseEntity<Boolean> apagar(@RequestParam @NotNull(message = "O id da empresa não pode ser nulo") Long id){
		return ResponseEntity.ok(this.empresaService.apagar(id)); 
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity<Boolean> atualizar(@RequestBody EmpresaAtualizarDTO dto){
		return ResponseEntity.ok(this.empresaService.atualizar(dto)); 
	}
}
