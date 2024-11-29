import type Pergunta from "@/data/model/Pergunta";

const perguntas: Pergunta[] = [
	{
		id: 1,
		enunciado: "Qual é a máscara padrão para uma rede Classe C?",
		opcoes: ["255.255.255.255", "255.0.0.0", "255.255.255.0", "255.255.0.0"],
		resposta: 2,
	},
	{
		id: 2,
		enunciado: 'O que significa o termo "CIDR" em redes?',
		opcoes: [
			"Classful Internet Data Routing",
			"Centralized Internet Data Routing",
			"Classless Internal Device Routing",
			"Classless Inter-Domain Routing",
		],
		resposta: 3,
	},
	{
		id: 3,
		enunciado:
			"Qual protocolo é usado para traduzir nomes de domínio em endereços IP?",
		opcoes: ["DNS", "FTP", "ARP", "HTTP"],
		resposta: 0,
	},
	{
		id: 4,
		enunciado: "Qual porta padrão é usada pelo protocolo HTTP?",
		opcoes: ["443", "22", "80", "53"],
		resposta: 2,
	},
	{
		id: 5,
		enunciado: "Qual camada do modelo OSI é responsável pelo roteamento?",
		opcoes: ["Sessão", "Transporte", "Rede", "Física"],
		resposta: 2,
	},
	{
		id: 6,
		enunciado: "Qual o endereço IPv4 reservado para loopback?",
		opcoes: ["255.255.255.255", "127.0.0.1", "0.0.0.0", "192.168.0.1"],
		resposta: 1,
	},
	{
		id: 7,
		enunciado:
			"Qual protocolo é usado para resolver endereços IP para endereços MAC?",
		opcoes: ["RARP", "NAT", "ICMP", "ARP"],
		resposta: 3,
	},
	{
		id: 8,
		enunciado: "Qual o propósito do protocolo BGP?",
		opcoes: [
			"Prover DHCP automático",
			"Monitorar dispositivos de rede",
			"Troca de informações de roteamento entre AS",
			"Gerenciar VLANs",
		],
		resposta: 2,
	},
	{
		id: 9,
		enunciado: "Qual porta padrão é usada pelo protocolo HTTPS?",
		opcoes: ["22", "443", "21", "80"],
		resposta: 1,
	},
	{
		id: 10,
		enunciado: "O que significa NAT em redes?",
		opcoes: [
			"Network Administration Tool",
			"Node Access Transfer",
			"None of the above",
			"Network Address Translation",
		],
		resposta: 3,
	},
	{
		id: 11,
		enunciado: "Qual endereço IPv4 é usado para broadcast?",
		opcoes: ["192.168.1.255", "0.0.0.0", "255.255.255.255", "127.0.0.1"],
		resposta: 2,
	},
	{
		id: 12,
		enunciado: "O que significa MTU?",
		opcoes: [
			"Media Transfer Unit",
			"Maximum Transfer Unit",
			"Minimum Transmission Unit",
			"Maximum Transmission Unit",
		],
		resposta: 3,
	},
	{
		id: 13,
		enunciado: "Qual protocolo é usado para envio de emails?",
		opcoes: ["HTTP", "IMAP", "SMTP", "POP3"],
		resposta: 2,
	},
	{
		id: 14,
		enunciado: "Qual a função do protocolo ICMP?",
		opcoes: [
			"Prover roteamento",
			"Gerenciar conexões TCP",
			"Resolver nomes de domínio",
			"Envio de mensagens de erro e controle",
		],
		resposta: 3,
	},
	{
		id: 15,
		enunciado: "Quantos bits tem um endereço IPv6?",
		opcoes: ["64", "32", "256", "128"],
		resposta: 3,
	},
	{
		id: 16,
		enunciado: "Qual é o formato correto de um endereço IPv6?",
		opcoes: ["10.0.0.0", "127.0.0.1", "192.168.1.1", "::1"],
		resposta: 3,
	},
	{
		id: 17,
		enunciado: "O que é o protocolo RIP?",
		opcoes: [
			"Um protocolo de gerenciamento de VLANs",
			"Uma ferramenta de diagnóstico",
			"Um protocolo de roteamento dinâmico",
			"Um tipo de firewall",
		],
		resposta: 2,
	},
	{
		id: 18,
		enunciado: "Qual a principal diferença entre TCP e UDP?",
		opcoes: [
			"TCP é mais rápido que UDP",
			"TCP é orientado a conexão e UDP não",
			"UDP é orientado a conexão e TCP não",
			"Nenhuma das anteriores",
		],
		resposta: 1,
	},
	{
		id: 19,
		enunciado: "O que é um Autonomous System (AS)?",
		opcoes: [
			"Um endereço IP único",
			"Uma sub-rede privada",
			"Um conjunto de roteadores sob um único controle administrativo",
			"Um protocolo de roteamento dinâmico",
		],
		resposta: 2,
	},
	{
		id: 20,
		enunciado: "Qual é o prefixo de endereços IPv6 multicast?",
		opcoes: ["FE80::/10", "::1", "FF00::/8", "FC00::/7"],
		resposta: 2,
	},
	{
		id: 21,
		enunciado:
			"Qual comando é usado para verificar a tabela de roteamento no Linux?",
		opcoes: ["ping", "ifconfig", "traceroute", "netstat -r"],
		resposta: 3,
	},
	{
		id: 22,
		enunciado: "Qual protocolo é usado para sincronizar o tempo em redes?",
		opcoes: ["DNS", "FTP", "SNMP", "NTP"],
		resposta: 3,
	},
	{
		id: 23,
		enunciado: "O que é VLAN?",
		opcoes: [
			"Virtual Local Area Network",
			"Visual LAN",
			"Virtual Logical Area Network",
			"Variable LAN",
		],
		resposta: 0,
	},
	{
		id: 24,
		enunciado: "Qual é a porta padrão usada pelo protocolo SSH?",
		opcoes: ["80", "443", "22", "23"],
		resposta: 2,
	},
	{
		id: 25,
		enunciado:
			"Quantos hosts podem ser endereçados em uma rede com máscara /24?",
		opcoes: ["256", "254", "512", "1024"],
		resposta: 1,
	},
	{
		id: 26,
		enunciado:
			"Qual é o protocolo responsável por garantir confiabilidade em conexões?",
		opcoes: ["TCP", "ICMP", "UDP", "IP"],
		resposta: 0,
	},
	{
		id: 27,
		enunciado:
			"Qual camada do modelo OSI lida com o encapsulamento de dados em quadros?",
		opcoes: ["Rede", "Física", "Enlace", "Aplicação"],
		resposta: 2,
	},
	{
		id: 28,
		enunciado: "Qual o endereço IPv6 reservado para localhost?",
		opcoes: ["::1", "FE80::1", "::/128", "::"],
		resposta: 0,
	},
	{
		id: 29,
		enunciado:
			"Qual ferramenta é usada para rastrear o caminho que um pacote percorre até o destino?",
		opcoes: ["traceroute", "netstat", "ping", "telnet"],
		resposta: 0,
	},
	{
		id: 30,
		enunciado: "O que é a RFC 1918?",
		opcoes: [
			"Um protocolo de roteamento dinâmico",
			"Um padrão de endereçamento privado",
			"Um tipo de criptografia",
			"Uma ferramenta de firewall",
		],
		resposta: 1,
	},
	{
		id: 31,
		enunciado: "Qual porta padrão é usada pelo protocolo Telnet?",
		opcoes: ["23", "21", "25", "22"],
		resposta: 0,
	},
	{
		id: 32,
		enunciado: "Qual protocolo é usado para gerenciar dispositivos de rede?",
		opcoes: ["NTP", "SNMP", "ICMP", "SMTP"],
		resposta: 1,
	},
	{
		id: 33,
		enunciado: "Qual é o número padrão de bits em uma máscara de sub-rede /16?",
		opcoes: ["32", "8", "16", "24"],
		resposta: 2,
	},
	{
		id: 34,
		enunciado:
			'Qual é o intervalo de portas conhecido como "portas bem conhecidas"?',
		opcoes: ["49152-65535", "1024-49151", "0-65535", "0-1023"],
		resposta: 3,
	},
	{
		id: 35,
		enunciado: "O que significa TTL em redes?",
		opcoes: [
			"Transmission Type Line",
			"Total Transfer Limit",
			"Time to Live",
			"Transfer to Local",
		],
		resposta: 2,
	},
	{
		id: 36,
		enunciado: "O que é um gateway padrão?",
		opcoes: [
			"O endereço do servidor DNS",
			"O roteador que conecta a rede à Internet",
			"O endereço do servidor DHCP",
			"O endereço de broadcast",
		],
		resposta: 1,
	},
	{
		id: 37,
		enunciado: "Qual comando exibe o endereço IP de um dispositivo no Windows?",
		opcoes: ["ping", "ip addr", "ifconfig", "ipconfig"],
		resposta: 3,
	},
	{
		id: 38,
		enunciado:
			"Qual tipo de NAT permite múltiplos dispositivos compartilharem um único endereço IP público?",
		opcoes: ["Dynamic NAT", "Double NAT", "Static NAT", "PAT (NAT sobrecarga)"],
		resposta: 3,
	},
	{
		id: 39,
		enunciado:
			"Qual é o protocolo padrão para acessar páginas web de forma segura?",
		opcoes: ["SSL", "HTTP", "HTTPS", "FTP"],
		resposta: 2,
	},
	{
		id: 40,
		enunciado: "O que significa o prefixo 192.168.0.0/16?",
		opcoes: [
			"Um endereço público",
			"Um endereço privado",
			"Um endereço de broadcast",
			"Um endereço de multicast",
		],
		resposta: 1,
	},
	{
		id: 41,
		enunciado: "Qual é o principal objetivo do DHCP?",
		opcoes: [
			"Gerenciar endereços IP",
			"Gerenciamento de VLANs",
			"Roteamento dinâmico",
			"Sincronização de tempo",
		],
		resposta: 0,
	},
	{
		id: 42,
		enunciado:
			"Qual é o nome do protocolo usado para transferir arquivos de forma não segura?",
		opcoes: ["HTTP", "SFTP", "FTP", "TFTP"],
		resposta: 2,
	},
	{
		id: 43,
		enunciado: "O que significa o código de resposta HTTP 404?",
		opcoes: [
			"Recurso não encontrado",
			"Erro interno do servidor",
			"Requisição bem-sucedida",
			"Não autorizado",
		],
		resposta: 0,
	},
	{
		id: 44,
		enunciado: "O que diferencia IPv4 de IPv6?",
		opcoes: [
			"Tamanho dos endereços",
			"Uso de NAT",
			"Protocolo de transporte",
			"Suporte a multicast",
		],
		resposta: 0,
	},
	{
		id: 45,
		enunciado:
			'Qual protocolo usa mensagens "Hello" para estabelecer adjacências entre roteadores?',
		opcoes: ["RIP", "EIGRP", "BGP", "OSPF"],
		resposta: 3,
	},
	{
		id: 46,
		enunciado:
			"Qual endereço IPv4 é reservado para redes privadas de Classe A?",
		opcoes: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "127.0.0.0/8"],
		resposta: 0,
	},
	{
		id: 47,
		enunciado:
			"Qual camada do modelo OSI é responsável por compressão de dados?",
		opcoes: ["Enlace", "Sessão", "Aplicação", "Apresentação"],
		resposta: 3,
	},
	{
		id: 48,
		enunciado: "O que significa um endereço IP com máscara /32?",
		opcoes: [
			"Um único host",
			"Um loopback",
			"Uma rede inteira",
			"Um broadcast",
		],
		resposta: 0,
	},
	{
		id: 49,
		enunciado: "O que é um pacote fragmentado em IPv4?",
		opcoes: [
			"Um pacote duplicado",
			"Um pacote perdido",
			"Um pacote corrompido",
			"Um pacote dividido em partes menores",
		],
		resposta: 3,
	},
	{
		id: 50,
		enunciado: "Qual protocolo permite o roteamento de endereços IPv6?",
		opcoes: ["EIGRPv2", "RIPv2", "OSPFv3", "BGP"],
		resposta: 2,
	},
];

export default perguntas;
