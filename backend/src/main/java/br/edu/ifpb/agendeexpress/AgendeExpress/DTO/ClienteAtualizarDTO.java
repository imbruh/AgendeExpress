package br.edu.ifpb.agendeexpress.AgendeExpress.DTO;

import javax.validation.constraints.Email;

import lombok.Data;

@Data
public class ClienteAtualizarDTO {

	private Long id;
	
	private String nome;

	@Email
	private String email;
	
	private String usuario;
	
	private String senha;

	private String telefone;
	
}
