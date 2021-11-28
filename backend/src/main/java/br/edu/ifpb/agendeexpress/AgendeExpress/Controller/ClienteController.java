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

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.ClienteAtualizarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.ClienteCadastrarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Service.ClienteService;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Boolean> cadastrar(@RequestBody ClienteCadastrarDTO dto){
		return ResponseEntity.ok(clienteService.cadastrar(dto));
	}
	
	@DeleteMapping("/apagar")
	public ResponseEntity<Boolean> apagar(@RequestParam @NotNull(message = "O id do cliente não pode ser nulo") Long id){
		return  ResponseEntity.ok(clienteService.apagar(id));
	}
	
	@PutMapping("/atualizar")
	public ResponseEntity<Boolean> atualizar(@RequestBody ClienteAtualizarDTO dto){
		return ResponseEntity.ok(clienteService.atualizar(dto));
	}
}
