package br.edu.ifpb.agendeexpress.AgendeExpress.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.HorarioCadastrarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.HorarioListarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Cliente;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Horario;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.ClienteRepository;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.HorarioRepository;

@Service
public class HorarioService {

	@Autowired
	private HorarioRepository horarioRepository;

	@Autowired
	private ClienteRepository clienteRepository;
	
	public void cadastrar(HorarioCadastrarDTO horario) {
		Horario horarioExistente = horarioRepository.findByDatahora(horario.getDataHora());
		Optional<Cliente> cliente = clienteRepository.findById(horario.getIdCliente());
//		if (horarioExistente != null) {
//			return null;
//		}
		
		horarioRepository.save(Horario.builder()
				.datahora(horario.getDataHora())
				.cliente(cliente.get())
				.build());
		
//		return "Horário marcado com sucesso";
		
	}
	
	public List<HorarioListarDTO> listar(LocalDateTime dataHora){
		List<Horario> horarios = horarioRepository.listarPorDia(dataHora);
		List<HorarioListarDTO> horariosDTO = new ArrayList<>();
		
		for(Horario hr : horarios) {
			HorarioListarDTO hrDTO =  HorarioListarDTO.builder()
			.ano(hr.getDatahora().getYear())
			.mes(hr.getDatahora().getMonthValue())
			.dia(hr.getDatahora().getDayOfMonth())
			.hora(hr.getDatahora().getHour())
			.minuto(hr.getDatahora().getMinute())
			.diaSemana(hr.getDatahora().getDayOfWeek().toString())
			.build();
			horariosDTO.add(hrDTO);
		}
		
		return horariosDTO;

	}

	public List<String> filtrar(LocalDateTime data) {
		List<Horario> horarios = this.horarioRepository.listarPorDia(data);
		
		List<String> horariosMarcados = new ArrayList<>();
		for(Horario h: horarios){
			horariosMarcados.add(Integer.toString(h.getDatahora().getHour()));
		}
		
		List<String> horas = new ArrayList<>();
		for(int i = 8; i < 18; i++) {
			if(!horariosMarcados.contains(Integer.toString(i))){
				horas.add(Integer.toString(i));
			}
		}
		
		return horas;
	}
	
}
