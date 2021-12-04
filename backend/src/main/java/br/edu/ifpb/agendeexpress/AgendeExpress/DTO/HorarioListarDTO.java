package br.edu.ifpb.agendeexpress.AgendeExpress.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class HorarioListarDTO {

	private int dia;
	private int mes;
	private int ano;
	private int hora;
	private int minuto;
	private String diaSemana;
}
