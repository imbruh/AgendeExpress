package br.edu.ifpb.agendeexpress.AgendeExpress.Controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.HorarioCadastrarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.HorarioListarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Service.HorarioService;

@RestController
@RequestMapping(value = "/horario")
@CrossOrigin(origins = "*")
public class HorarioController {

	@Autowired
	private HorarioService horarioService;
	
	@PostMapping("/cadastrar")
	public void cadastrar(@RequestBody HorarioCadastrarDTO dto) {
		this.horarioService.cadastrar(dto);
	}
	
	@GetMapping("/listar")
	public List<HorarioListarDTO> listar(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime dataHora){
		return this.horarioService.listar(dataHora);
	}
	
	@GetMapping("/filtrar-horario")
	public List<String> filtrar(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime data){
		return this.horarioService.filtrar(data);
	}
}
