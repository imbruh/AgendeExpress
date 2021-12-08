package br.edu.ifpb.agendeexpress.AgendeExpress.DTO;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class ClienteLoginDTO {
	
	@NotBlank
	private String nomeUsuario;
	
	@NotBlank
	private String senha;
}
