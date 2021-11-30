package br.edu.ifpb.agendeexpress.AgendeExpress.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.agendeexpress.AgendeExpress.Model.ClienteEmpresa;

@Repository
public interface ClienteEmpresaRepository extends JpaRepository<ClienteEmpresa, Long> {

}