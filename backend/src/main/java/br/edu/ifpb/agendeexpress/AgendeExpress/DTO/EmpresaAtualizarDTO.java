package br.edu.ifpb.agendeexpress.AgendeExpress.DTO;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EmpresaAtualizarDTO {

	@NotNull
	private Long id;
	
//	@JsonProperty(required = false)
	private String nome;
	
//	@JsonProperty(required = false)
	private String senha;
}
