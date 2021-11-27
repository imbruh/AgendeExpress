package br.edu.ifpb.agendeexpress.AgendeExpress.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifpb.agendeexpress.AgendeExpress.Service.HorarioService;

@RestController
@RequestMapping(value = "/horario")
public class HorarioController {

	@Autowired
	private HorarioService horarioService;
}
