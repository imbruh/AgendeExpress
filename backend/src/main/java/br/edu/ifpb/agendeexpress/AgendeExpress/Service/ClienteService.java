package br.edu.ifpb.agendeexpress.AgendeExpress.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;

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
	
	public List<String> listaMsgs = new ArrayList<>();
	
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
	
	public String enviarMsg() throws Exception{
		ConnectionFactory connectionFactory = new ConnectionFactory();

        //localizacao do gestor da fila (Queue Manager)
        connectionFactory.setHost("localhost");
        connectionFactory.setPort(5672);

        String NOME_FILA = "filaOla";
        try(
                //criacao de uma coneccao
                Connection connection = connectionFactory.newConnection();
                //criando um canal na conexao
                Channel channel = connection.createChannel()) {
            //Esse corpo especifica o envio da mensagem para a fila

            //Declaracao da fila. Se nao existir ainda no queue manager, serah criada. Se jah existir, e foi criada com
            // os mesmos parametros, pega a referencia da fila. Se foi criada com parametros diferentes, lanca excecao
            channel.queueDeclare(NOME_FILA, false, false, false, null);
            String mensagem = "Olá mundo!";
            //publica uma mensagem na fila
            channel.basicPublish("", NOME_FILA, null, mensagem.getBytes());
            System.out.println("Enviei mensagem: " + mensagem);
            return mensagem;
        }
	}
	
	public void receberMsg() throws Exception{
		String NOME_FILA = "filaOla";

        //criando a fabrica de conexoes e criando uma conexao
        ConnectionFactory connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("localhost");
        Connection conexao = connectionFactory.newConnection();

        //criando um canal e declarando uma fila
        Channel canal = conexao.createChannel();
        canal.queueDeclare(NOME_FILA, false, false, false, null);

        //Definindo a funcao callback
        DeliverCallback callback = (consumerTag, delivery) -> {
            String mensagem = new String(delivery.getBody());
            this.listaMsgs.add(mensagem);
            System.out.println(listaMsgs);
            this.clienteRepository.save(Cliente.builder().nome(mensagem).email("a@gmail.com").senha("123").telefone("12345").usuario("teste").build());
            System.out.println("Recebi a mensagem: " + mensagem);
            
        };

        //Consome da fila
        canal.basicConsume(NOME_FILA, true, callback, consumerTag -> {});
//        System.out.println("Continuarei executando outras atividades enquanto não chega mensagem...");
	}
	
	public void retornaListaMsg(){
		System.out.println(this.listaMsgs);
	}
}
