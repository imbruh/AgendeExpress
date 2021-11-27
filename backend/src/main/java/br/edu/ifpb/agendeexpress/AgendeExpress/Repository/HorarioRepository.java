package br.edu.ifpb.agendeexpress.AgendeExpress.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifpb.agendeexpress.AgendeExpress.Model.Horario;

@Repository
public interface HorarioRepository extends JpaRepository<Horario, Long>{

}