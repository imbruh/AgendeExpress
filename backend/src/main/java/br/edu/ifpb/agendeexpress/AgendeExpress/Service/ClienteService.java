package br.edu.ifpb.agendeexpress.AgendeExpress.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.ClienteAtualizarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.ClienteCadastrarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Cliente;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.ClienteEmpresa;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Empresa;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.ClienteEmpresaRepository;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.ClienteRepository;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.EmpresaRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private EmpresaRepository empresaRepository;

	@Autowired
	private ClienteEmpresaRepository clienteEmpresaRepository;
	
	public Boolean cadastrar(ClienteCadastrarDTO dto) {
		Cliente clienteEmailExistente = clienteRepository.findByEmail(dto.getEmail());

		if (clienteEmailExistente != null) {
			return false;
		}
		Cliente clienteUsuarioExistente = clienteRepository.findByUsuario(dto.getUsuario());
		
		if (clienteUsuarioExistente != null) {
			return false;
		}
		
		Cliente cliente = clienteRepository.save(Cliente.builder()
				.email(dto.getEmail())
				.nome(dto.getNome())
				.usuario(dto.getUsuario())
				.senha(dto.getSenha())
				.telefone(dto.getTelefone())
				.build());
		
		for (Long id : dto.getIdEmpresa()) {
			Empresa empresa = empresaRepository.getById(id);
			if (empresa == null) {
				return false;
			}
			ClienteEmpresa clienteEmpresa = ClienteEmpresa.builder()
					.cliente(cliente)
					.empresa(empresa)
					.build();
			this.clienteEmpresaRepository.save(clienteEmpresa);
		}
		
		return true;
	}

	@Transactional
	public Boolean atualizar(ClienteAtualizarDTO dto) {
		Cliente clienteExistente = clienteRepository.getById(dto.getId());

		if (clienteExistente == null) {
			return false;
		}
		if (dto.getEmail() != null) {
			clienteExistente.setEmail(dto.getEmail());
		}
		if (dto.getNome() != null) {
			clienteExistente.setNome(dto.getNome());						
		}
		if (dto.getUsuario() != null) {
			clienteExistente.setUsuario(dto.getUsuario());
		}
		if (dto.getSenha() != null) {
			clienteExistente.setSenha(dto.getSenha());
		}
		if (dto.getTelefone() != null) {
			clienteExistente.setTelefone(dto.getTelefone());
		}
		clienteRepository.save(clienteExistente);
		
		return true;
	}

	public Boolean apagar(Long id) {
		Cliente clienteExistente = clienteRepository.getById(id);
		
		if (clienteExistente != null) {
			clienteRepository.delete(clienteExistente);
			return true;
		}
		
		return false;
	}
}
