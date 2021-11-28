package br.edu.ifpb.agendeexpress.AgendeExpress.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ifpb.agendeexpress.AgendeExpress.DTO.EmpresaAtualizarDTO;
import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Empresa;
import br.edu.ifpb.agendeexpress.AgendeExpress.Repository.EmpresaRepository;

@Service
public class EmpresaService {

	@Autowired
	private EmpresaRepository empresaRepository;
	
	public Boolean cadastrar(Empresa empresa) {
		Empresa empresaExistente = empresaRepository.findByCnpj(empresa.getCnpj());
		
		if(empresaExistente == null) {
			this.empresaRepository.save(empresa);
			return true;
		}
		
		return false;
	}

	public Boolean apagar(Long id) {
		Empresa empresaExistente = empresaRepository.getById(id);
		
		if(empresaExistente != null) {
			this.empresaRepository.delete(empresaExistente);
			return true;
		}
		
		return false;
	}

	@Transactional
	public Boolean atualizar(EmpresaAtualizarDTO dto) {		
		Empresa empresaExistente = empresaRepository.getById(dto.getId());
		
		if(empresaExistente != null) {
			if(dto.getNome() != null)
			 empresaExistente.setNome(dto.getNome());
			if(dto.getSenha() != null)
				empresaExistente.setSenha(dto.getSenha());
			this.empresaRepository.save(empresaExistente);
			return true;
		}
		
		return false;
	}
}
