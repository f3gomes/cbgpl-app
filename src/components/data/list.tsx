import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { FileCheck2 } from "lucide-react";
import { Input } from "../ui/input";
import MultiSelect from "../custom/multi-select";
import RoleSelect from "../custom/role-select";
import VisibleSelect from "../custom/visible-select";

export interface ISession {
  session: {
    id: string;
    time: string;
    type: string;
    theme: string;
    speaker: string;
    description: string;
  };
}

export const navItems = [
  { title: "Início", link: "/" },
  { title: "Programação", link: "/schedule" },
  { title: "Fotos", link: "#" },
];

export const navItemsMobile = [
  { title: "Início", link: "/", target: false },
  { title: "Programação", link: "/schedule", target: false },
  // { title: "Fotos", link: "/", target: false },
  { title: "Palestrantes", link: "/speakers", target: false },
  { title: "Participantes", link: "/participants", target: false },
  { title: "Experiência", link: "/", target: true },
  {
    title: "Certificações",
    link: "https://pontoonline.com.br/20cbgpl/",
    target: true,
  },
  { title: "Feedback", link: "/", target: false },
];

export const speakersList = [
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
  {
    name: "Neudson Barroso",
    role: "Gerente de Projetos",
    image: "/assets/profile.jpeg",
    type: "SPEAKER",
  },
];

export const socialIcons = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/cbgpl/posts/?feedView=all",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/cbgpl",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@cbgpl",
  },
  {
    icon: Mail,
    href: "mailto:suportecbgpl@pmice.org.br",
  },
  {
    icon: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=558591431049",
  },
];

export const sideIcons = [
  { title: "Palestrantes", icons: MicVocal, href: "/speakers", target: false },
  {
    title: "Participantes",
    icons: UsersRound,
    href: "/participants",
    target: false,
  },
  { title: "Livro de experiência", icons: MapPinned, href: "/", target: true },
  {
    title: "Certificações do Congresso",
    icons: FileCheck2,
    href: "https://pontoonline.com.br/20cbgpl/",
    target: true,
  },
  { title: "Feedback", icons: MessageSquareText, href: "/", target: false },
];

export const sessionsDayOne = [
  {
    id: "cerimonia-abertura-boas-vindas",
    time: "09:00 - 09:30",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-Vindas (Plenária)",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "project-success-carolina-latorre",
    time: "09:30 - 09:50",
    type: "Plenária",
    theme: "Project Success PMI",
    speaker: "Carolina Latorre - PMI Latam",
    description: "",
  },
  {
    id: "escritorio-gerenciamento-pmo",
    time: "09:50 - 10:50",
    type: "Plenária",
    theme: "Escritório de Gerenciamento de Projetos – PMO",
    speaker: "Américo Pinto",
    description: "",
  },
  {
    id: "como-acelerar-vmo",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Como Acelerar os 3 Pilares do VMO Ágil",
    speaker: "Antonio Muniz",
    description: "",
  },
  {
    id: "avaliacao-maturidade-esg",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Experiência de Uma Jornada de Avaliação de Maturidade de Práticas ESG Numa Organização Sem Fins Lucrativos",
    speaker: "Everaldo Artur Grahl - Professor Universitário",
    description: "",
  },
  {
    id: "gestao-mudanca-neuroplasticidade",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gestão de Mudança e a Neuroplasticidade Cerebral",
    speaker: "Driéle Castro - Mentora de projetos e gestão",
    description: "",
  },
  {
    id: "gerenciamento-egos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gerenciamento de Egos: O Que Apenas a Experiência Ensina?",
    speaker: "Anderson Marques Nunes - Head Global do PMO da Angola Cables",
    description:
      "Compartilhar a experiência de mercado a respeito da importância da inteligência emocional para o gerente de projetos em busca de garantir a execução do projeto conforme o planejado mediante o esforço contínuo de garantir o engajamento das partes interessadas, com base em suas necessidades, expectativas, interesses e potencial impacto no projeto.",
  },
  {
    id: "workshop-design-thinking-lego",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme:
      "Design Thinking + Lego Serious Play Para Planejamento Estratégico (Experience)",
    speaker: "Sergio Nascimento - Empresário, Professor e Consultor",
    description: "",
  },
  {
    id: "workshop-projetizacao-pocket",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "Projetização Pocket",
    speaker:
      "Pedro Paulo Coutinho - Especialista em Redes de Computadores e Bancos de Dados pela PUC-MG, graduado em Tecnologia em Processamento de Dados pela UNA-MG, e certificado PMP®. É Diretor Executivo e Sócio Fundador da Strategie – Consultoria e Treinamentos, além de SCRUM Master na Entrega Contínua. e Felipe Borges - Presidente no PMI Minas Gerais",
    description: "",
  },
  {
    id: "workshop-pm-canvas-chatgpt",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PM Canvas com ChatGPT",
    speaker:
      "Bernardo Zurli - Especialista em Portfolio de Projetos e VP de Governança e Finanças do PMIRS",
    description: "",
  },
  {
    id: "workshop-pmo-ao-vmo",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PMO ao VMO: Construindo um Escritório de Valor na Prática",
    speaker:
      "Marcelo Antonelli - Consultor e Mentor em Gestão de Valor e Implantação de VMO",
    description: "",
  },
  {
    id: "painel-ceos",
    time: "13:50 - 14:30",
    type: "Painel",
    theme:
      "Da Estratégia à Execução: O Impacto da Liderança na Gestão de Projetos",
    speaker:
      "Cassio - CEO Grupo Portfolio, Patriciana - Presidente do Conselho de Administração das Farmácias Pague Menos e Murilo - CEO do Beach Park",
    description: "",
  },
  {
    id: "premio-melhores-projetos",
    time: "14:30 - 15:30",
    type: "Premiação",
    theme: "Prêmio Melhores do Ano: Categoria Projetos",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "case-patrocinador-zoho",
    time: "15:30 - 15:50",
    type: "Patrocinador",
    theme: "Case - ZOHO",
    speaker: "Zoho",
    description: "",
  },
  {
    id: "debate-executivo",
    time: "16:20 - 17:00",
    type: "Debate Executivo",
    theme: "Gestão de Projetos Públicos e Privados: Conexões e Desafios",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "workshop-ai-inception",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme: "AI Inception: Da Necessidade à Viabilidade",
    speaker: "Rafael Vilela - Consultor em Gestão Estratégica Ágil",
    description: "",
  },
  {
    id: "ia-revolucao-gerenciamento",
    time: "16:20 - 18:00",
    type: "Palestra",
    theme: "Como os Agentes de IA Podem Revolucionar o Gerenc. de Proj.",
    speaker: "Victor Dantas - MOLDSOFT",
    description: "",
  },
  {
    id: "workshop-gestao-projetos-sociais",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme:
      "Gestão de Projetos Sociais: Estratégias para Gerar Impacto Positivo",
    speaker: "Elisangela Machado - Gerente de Projetos Sociais",
    description: "",
  },
  {
    id: "case-patrocinador-monday-nortrez",
    time: "17:00 - 17:20",
    type: "Patrocinador",
    theme: "Case MONDAY + NORTREZ",
    speaker: "Monday + Nortrez",
    description: "",
  },
  {
    id: "painel-vmo",
    time: "17:20 - 18:00",
    type: "Painel",
    theme: "Painel sobre Value Management Office (VMO)",
    speaker:
      "Mirian Leite - Head VMO Grupo 3corações,Erica Smith - Head de PMO Estratégico,Marcelo Antonelli - Consultor e Mentor em Gestão de Valor e Implantação de VMO e Fábio Cruz - Head de Práticas, Projetos e Agilidade para clientes",
    description: "",
  },
  {
    id: "futuro-trabalho-ai",
    time: "18:10 - 19:10",
    type: "Palestra",
    theme:
      "O Futuro do Trabalho e os Impactos da AI na Profissão de Gerenciamento de Projetos",
    speaker: "Ricardo Vargas",
    description: "",
  },
];

export const sessionsDayTwo = [
  {
    id: "cerimonia-abertura-boas-vindas-dia2",
    time: "09:00 - 09:10",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-Vindas",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "palestra-gino-terentim",
    time: "09:30 - 10:30",
    type: "Palestra",
    theme: "Gestão Sustentável de Projetos",
    speaker: "Gino Terentim - Professor e Curioso",
    description: "",
  },
  {
    id: "margareth-carneiro-agile-alliance",
    time: "10:30 - 10:50",
    type: "Palestra",
    theme: "PMI Agile Alliance: O Futuro dos Profissionais de Projetos",
    speaker:
      "Margareth Carneiro - Diretora do Agile Alliance, ex PMI Board of Directors",
    description: "",
  },
  {
    id: "sustentabilidade-em-mega-projetos-desafios-e-oportunidades",
    time: "11:20 - 12:00",
    type: "Painel",
    theme: "Sustentabilidade em Mega Projetos: Desafios e Oportunidades",
    speaker:
      "Kelly Anselmo - CEO Projecta - Consultoria & Gestão,Mateus Freire - Diretor Geral - Magnesium do Brasil,Maiza Pimenta,Andrea Oliveira - Diretora Executiva Marquise Incorporações",
    description: "",
  },
  {
    id: "amazonia-gerenciamento-de-projetos-sustentaveis-com-impacto-social-positivo",
    time: "11:20 - 12:00",
    type: "Case",
    theme:
      "Case Amazônia - Gerenciamento de Projetos Sustentáveis com Impacto Social Positivo",
    speaker: "Felipe Borges - Presidente no PMI Minas Gerais",
    description: "",
  },
  {
    id: "projeto-de-conversao-de-aeronaves-de-passageiros-e190-em-e190f-cargueiras",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Projeto de Conversão de Aeronaves de Passageiros E190 em E190F Cargueiras",
    speaker: "Marcelo Tocci - Program Director - EMBRAER",
    description: "",
  },
  {
    id: "otimizando-a-jornada-do-time-aplicando-o-dojo-em-metricas-com-auxilio-da-ia-em-projetos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Otimizando a Jornada do Time: Aplicando o Dojô em Métricas com Auxílio da IA em Projetos",
    speaker: "Fabio Henrique",
    description: "",
  },
  {
    id: "mediacao-de-conflitos-e-a-gestao-de-projetos-uma-dupla-perfeita",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Mediação de Conflitos e a Gestão de Projetos - Uma dupla perfeita!",
    speaker:
      "Antônio Duarte - Especialista de Projetos, Programas e Portfólio no Exército Brasileiro",
    description: "",
  },
  {
    id: "sao-joao-de-caruaru-como-planejar-e-gerenciar-o-maior-projeto-de-entretenimento-do-mundo",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme:
      "São João de Caruaru: Como Planejar e Gerenciar o Maior Projeto de Entretenimento do Mundo",
    speaker: "Marcio Gomes - Head PMO Prefeitura de Caruaru",
    description: "",
  },
  {
    id: "seu-comportamento-esta-te-sabotando-e-voce-nem-sabe",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme: "Seu Comportamento Está te Sabotando e Você nem Sabe",
    speaker:
      "Carlos Silva Jr - Cristão, Pai, Esposo, Curioso, Empresário, Mentor e Palestrante - SLUPER",
    description: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas-networking-pre-workshop",
    time: "13:00 - 16:00",
    type: "Workshop",
    theme:
      "Uncertainty Cycle: Gerenciamento de Incertezas (Networking Pré-Workshop)",
    speaker: "Ricardo Vargas",
    description: "",
  },
  {
    id: "perspicacia-empresarial-estrategias-de-gestao-para-transformar-criatividade-em-resultados-sustentaveis",
    time: "14:00 - 14:40",
    type: "Palestra",
    theme:
      "Perspicácia Empresarial: Estratégias de Gestão Para Transformar Criatividade em Resultados Sustentáveis",
    speaker: "Lia Quinderé - Chef Pâtissier, Fundadora e CEO da Sucré Brasil",
    description: "",
  },
  {
    id: "construindo-sua-persona-de-lideranca-um-guia-baseado-nos-seus-pontos-fortes",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme:
      "Construindo Sua Persona de Liderança: Um Guia Baseado Nos Seus Pontos Fortes",
    speaker: "Ricardo Peters - Canivete Suíço",
    description: "",
  },
  {
    id: "estimativas-ageis-poemas-que-transformam-planejamento",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme: "Estimativas Ágeis: Poemas que Transformam Planejamento",
    speaker: "Sarah Branco - IT Manager",
    description: "",
  },
  {
    id: "melhores-do-ano",
    time: "14:40 - 15:40",
    type: "Premiação",
    theme: "Melhores do Ano",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "lideranca-feminina",
    time: "16:30 - 17:10",
    type: "Painel",
    theme: "Liderança Feminina",
    speaker:
      "Delania Santos - CEO DS - Educação & negócios e Mentora Executiva Internacional,Annete Castro,Simone Caixeta - Diretora de Pessoas,Fernanda Colares - Médica, Professora e Gestora",
    description: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas",
    time: "16:30 - 17:50",
    type: "Workshop",
    theme: "Uncertainty Cycle - Gerenciamento de Incertezas",
    speaker: "Ricardo Vargas",
    description: "",
  },
  {
    id: "resultado-melhores-do-ano-projetos-e-pmo",
    time: "17:10 - 17:30",
    type: "Premiação",
    theme: "Resultado Melhores do Ano - Projetos e PMO",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "case-patrocinador",
    time: "17:30 - 17:50",
    type: "Patrocinador",
    theme: "Case FIOCRUZ",
    speaker: "FIOCRUZ",
    description: "",
  },
  {
    id: "impacto-social-esg-gestao-de-projetos-sociais",
    time: "18:00 - 19:00",
    type: "Palestra",
    theme: "Impacto Social - ESG, Gestão de Projetos Sociais",
    speaker: "Andreia Cardoso - Diretora Executiva da Somos Um",
    description: "",
  },
];

export const workshopDetailsList = [
  {
    id: "cerimonia-abertura-boas-vindas",
    time: "09:00 - 09:30",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-Vindas (Plenária)",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "project-success-carolina-latorre",
    time: "09:30 - 09:50",
    type: "Plenária",
    theme: "Project Success PMI",
    speaker: "Carolina Latorre - PMI Latam",
    description: "",
  },
  {
    id: "escritorio-gerenciamento-pmo",
    time: "09:50 - 10:50",
    type: "Plenária",
    theme: "Escritório de Gerenciamento de Projetos – PMO",
    speaker: "Américo Pinto",
    description: "",
  },
  {
    id: "como-acelerar-vmo",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Como Acelerar os 3 Pilares do VMO Ágil",
    speaker: "Antonio Muniz",
    description: "",
  },
  {
    id: "avaliacao-maturidade-esg",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Experiência de Uma Jornada de Avaliação de Maturidade de Práticas ESG Numa Organização Sem Fins Lucrativos",
    speaker: "Everaldo Artur Grahl - Professor Universitário",
    description: "",
  },
  {
    id: "gestao-mudanca-neuroplasticidade",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gestão de Mudança e a Neuroplasticidade Cerebral",
    speaker: "Driéle Castro - Mentora de projetos e gestão",
    description: "",
  },
  {
    id: "gerenciamento-egos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gerenciamento de Egos: O Que Apenas a Experiência Ensina?",
    speaker: "Anderson Marques Nunes - Head Global do PMO da Angola Cables",
    description:
      "Compartilhar a experiência de mercado a respeito da importância da inteligência emocional para o gerente de projetos em busca de garantir a execução do projeto conforme o planejado mediante o esforço contínuo de garantir o engajamento das partes interessadas, com base em suas necessidades, expectativas, interesses e potencial impacto no projeto.",
  },
  {
    id: "workshop-design-thinking-lego",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme:
      "Design Thinking + Lego Serious Play Para Planejamento Estratégico (Experience)",
    speaker: "Sergio Nascimento - Empresário, Professor e Consultor",
    description: "",
  },
  {
    id: "workshop-projetizacao-pocket",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "Projetização Pocket",
    speaker:
      "Pedro Paulo Coutinho - Especialista em Redes de Computadores e Bancos de Dados pela PUC-MG, graduado em Tecnologia em Processamento de Dados pela UNA-MG, e certificado PMP®. É Diretor Executivo e Sócio Fundador da Strategie – Consultoria e Treinamentos, além de SCRUM Master na Entrega Contínua. e Felipe Borges - Presidente no PMI Minas Gerais",
    description: "",
  },
  {
    id: "workshop-pm-canvas-chatgpt",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PM Canvas com ChatGPT",
    speaker:
      "Bernardo Zurli - Especialista em Portfolio de Projetos e VP de Governança e Finanças do PMIRS",
    description: "",
  },
  {
    id: "workshop-pmo-ao-vmo",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PMO ao VMO: Construindo um Escritório de Valor na Prática",
    speaker:
      "Marcelo Antonelli - Consultor e Mentor em Gestão de Valor e Implantação de VMO",
    description: "",
  },
  {
    id: "painel-ceos",
    time: "13:50 - 14:30",
    type: "Painel",
    theme:
      "Da Estratégia à Execução: O Impacto da Liderança na Gestão de Projetos",
    speaker:
      "Cassio - CEO Grupo Portfolio, Patriciana - Presidente do Conselho de Administração das Farmácias Pague Menos e Murilo - CEO do Beach Park",
    description: "",
  },
  {
    id: "premio-melhores-projetos",
    time: "14:30 - 15:30",
    type: "Premiação",
    theme: "Prêmio Melhores do Ano: Categoria Projetos",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "case-patrocinador-zoho",
    time: "15:30 - 15:50",
    type: "Patrocinador",
    theme: "Case - ZOHO",
    speaker: "Zoho",
    description: "",
  },
  {
    id: "debate-executivo",
    time: "16:20 - 17:00",
    type: "Debate Executivo",
    theme: "Gestão de Projetos Públicos e Privados: Conexões e Desafios",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "workshop-ai-inception",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme: "AI Inception: Da Necessidade à Viabilidade",
    speaker: "Rafael Vilela - Consultor em Gestão Estratégica Ágil",
    description: "",
  },
  {
    id: "ia-revolucao-gerenciamento",
    time: "16:20 - 18:00",
    type: "Palestra",
    theme: "Como os Agentes de IA Podem Revolucionar o Gerenc. de Proj.",
    speaker: "Victor Dantas - MOLDSOFT",
    description: "",
  },
  {
    id: "workshop-gestao-projetos-sociais",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme:
      "Gestão de Projetos Sociais: Estratégias para Gerar Impacto Positivo",
    speaker: "Elisangela Machado - Gerente de Projetos Sociais",
    description: "",
  },
  {
    id: "case-patrocinador-monday-nortrez",
    time: "17:00 - 17:20",
    type: "Patrocinador",
    theme: "Case MONDAY + NORTREZ",
    speaker: "Monday + Nortrez",
    description: "",
  },
  {
    id: "painel-vmo",
    time: "17:20 - 18:00",
    type: "Painel",
    theme: "Painel sobre Value Management Office (VMO)",
    speaker:
      "Mirian Leite - Head VMO Grupo 3corações,Erica Smith - Head de PMO Estratégico,Marcelo Antonelli - Consultor e Mentor em Gestão de Valor e Implantação de VMO e Fábio Cruz - Head de Práticas, Projetos e Agilidade para clientes",
    description: "",
  },
  {
    id: "futuro-trabalho-ai",
    time: "18:10 - 19:10",
    type: "Palestra",
    theme:
      "O Futuro do Trabalho e os Impactos da AI na Profissão de Gerenciamento de Projetos",
    speaker: "Ricardo Vargas",
    description: "",
  },

  {
    id: "cerimonia-abertura-boas-vindas-dia2",
    time: "09:00 - 09:10",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-Vindas",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "palestra-gino-terentim",
    time: "09:30 - 10:30",
    type: "Palestra",
    theme: "Gestão Sustentável de Projetos",
    speaker: "Gino Terentim - Professor e Curioso",
    description: "",
  },
  {
    id: "margareth-carneiro-agile-alliance",
    time: "10:30 - 10:50",
    type: "Palestra",
    theme: "PMI Agile Alliance: O Futuro dos Profissionais de Projetos",
    speaker:
      "Margareth Carneiro - Diretora do Agile Alliance, ex PMI Board of Directors",
    description: "",
  },
  {
    id: "sustentabilidade-em-mega-projetos-desafios-e-oportunidades",
    time: "11:20 - 12:00",
    type: "Painel",
    theme: "Sustentabilidade em Mega Projetos: Desafios e Oportunidades",
    speaker:
      "Kelly Anselmo - CEO Projecta - Consultoria & Gestão,Mateus Freire - Diretor Geral - Magnesium do Brasil,Maiza Pimenta,Andrea Oliveira - Diretora Executiva Marquise Incorporações",
    description: "",
  },
  {
    id: "amazonia-gerenciamento-de-projetos-sustentaveis-com-impacto-social-positivo",
    time: "11:20 - 12:00",
    type: "Case",
    theme:
      "Case Amazônia - Gerenciamento de Projetos Sustentáveis com Impacto Social Positivo",
    speaker: "Felipe Borges - Presidente no PMI Minas Gerais",
    description: "",
  },
  {
    id: "projeto-de-conversao-de-aeronaves-de-passageiros-e190-em-e190f-cargueiras",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Projeto de Conversão de Aeronaves de Passageiros E190 em E190F Cargueiras",
    speaker: "Marcelo Tocci - Program Director - EMBRAER",
    description: "",
  },
  {
    id: "otimizando-a-jornada-do-time-aplicando-o-dojo-em-metricas-com-auxilio-da-ia-em-projetos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Otimizando a Jornada do Time: Aplicando o Dojô em Métricas com Auxílio da IA em Projetos",
    speaker: "Fabio Henrique",
    description: "",
  },
  {
    id: "mediacao-de-conflitos-e-a-gestao-de-projetos-uma-dupla-perfeita",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Mediação de Conflitos e a Gestão de Projetos - Uma dupla perfeita!",
    speaker:
      "Antônio Duarte - Especialista de Projetos, Programas e Portfólio no Exército Brasileiro",
    description: "",
  },
  {
    id: "sao-joao-de-caruaru-como-planejar-e-gerenciar-o-maior-projeto-de-entretenimento-do-mundo",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme:
      "São João de Caruaru: Como Planejar e Gerenciar o Maior Projeto de Entretenimento do Mundo",
    speaker: "Marcio Gomes - Head PMO Prefeitura de Caruaru",
    description: "",
  },
  {
    id: "seu-comportamento-esta-te-sabotando-e-voce-nem-sabe",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme: "Seu Comportamento Está te Sabotando e Você nem Sabe",
    speaker:
      "Carlos Silva Jr - Cristão, Pai, Esposo, Curioso, Empresário, Mentor e Palestrante - SLUPER",
    description: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas-networking-pre-workshop",
    time: "13:00 - 16:00",
    type: "Workshop",
    theme:
      "Uncertainty Cycle: Gerenciamento de Incertezas (Networking Pré-Workshop)",
    speaker: "Ricardo Vargas",
    description: "",
  },
  {
    id: "perspicacia-empresarial-estrategias-de-gestao-para-transformar-criatividade-em-resultados-sustentaveis",
    time: "14:00 - 14:40",
    type: "Palestra",
    theme:
      "Perspicácia Empresarial: Estratégias de Gestão Para Transformar Criatividade em Resultados Sustentáveis",
    speaker: "Lia Quinderé - Chef Pâtissier, Fundadora e CEO da Sucré Brasil",
    description: "",
  },
  {
    id: "construindo-sua-persona-de-lideranca-um-guia-baseado-nos-seus-pontos-fortes",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme:
      "Construindo Sua Persona de Liderança: Um Guia Baseado Nos Seus Pontos Fortes",
    speaker: "Ricardo Peters - Canivete Suíço",
    description: "",
  },
  {
    id: "estimativas-ageis-poemas-que-transformam-planejamento",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme: "Estimativas Ágeis: Poemas que Transformam Planejamento",
    speaker: "Sarah Branco - IT Manager",
    description: "",
  },
  {
    id: "melhores-do-ano",
    time: "14:40 - 15:40",
    type: "Premiação",
    theme: "Melhores do Ano",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "lideranca-feminina",
    time: "16:30 - 17:10",
    type: "Painel",
    theme: "Liderança Feminina",
    speaker:
      "Delania Santos - CEO DS - Educação & negócios e Mentora Executiva Internacional,Annete Castro,Simone Caixeta - Diretora de Pessoas,Fernanda Colares - Médica, Professora e Gestora",
    description: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas",
    time: "16:30 - 17:50",
    type: "Workshop",
    theme: "Uncertainty Cycle - Gerenciamento de Incertezas",
    speaker: "Ricardo Vargas",
    description: "",
  },
  {
    id: "resultado-melhores-do-ano-projetos-e-pmo",
    time: "17:10 - 17:30",
    type: "Premiação",
    theme: "Resultado Melhores do Ano - Projetos e PMO",
    speaker: "Cristiano Oliveira - Presidente PMI",
    description: "",
  },
  {
    id: "case-patrocinador",
    time: "17:30 - 17:50",
    type: "Patrocinador",
    theme: "Case FIOCRUZ",
    speaker: "FIOCRUZ",
    description: "",
  },
  {
    id: "impacto-social-esg-gestao-de-projetos-sociais",
    time: "18:00 - 19:00",
    type: "Palestra",
    theme: "Impacto Social - ESG, Gestão de Projetos Sociais",
    speaker: "Andreia Cardoso - Diretora Executiva da Somos Um",
    description: "",
  },
];

export const formFieldsPersonalData = [
  {
    name: "visible",
    label: "Visível",
    component: VisibleSelect,
    props: {},
    className: "",
  },
  {
    title: "Dados Pessoais",
    name: "pmiId",
    label: "ID PMI",
    component: Input,
    props: {
      placeholder: "Identificação do PMI",
    },
    className: "",
  },
  {
    name: "name",
    label: "Nome Completo",
    component: Input,
    props: {
      placeholder: "João da Silva",
    },
    className: "",
    required: true,
  },
  {
    name: "email",
    label: "E-mail",
    component: Input,
    props: {
      placeholder: "joao@exemplo.com",
    },
    className: "",
    required: true,
  },
  {
    name: "phone",
    label: "Número de Telefone",
    component: Input,
    props: {
      placeholder: "(11) 98765-4321",
    },
    className: "",
    required: true,
  },
  {
    name: "role",
    label: "Cargo",
    component: RoleSelect,
    props: {
      placeholder: "Cargo",
    },
    className: "",
  },
  {
    name: "company",
    label: "Organização",
    component: Input,
    props: {
      placeholder: "Empresa XYZ",
    },
    className: "",
  },
  {
    name: "areas",
    label: "Áreas de Interesse",
    component: MultiSelect,
    props: {},
    className: "relative z-10",
    required: true,
  },
];

export const formFieldsPersonalDataEdit = [
  {
    name: "visible",
    label: "Visível",
    component: VisibleSelect,
    props: {},
    className: "",
  },
  {
    title: "Dados Pessoais",
    name: "pmiId",
    label: "ID PMI",
    component: Input,
    props: {
      placeholder: "Identificação do PMI",
    },
    className: "",
  },
  {
    name: "name",
    label: "Nome Completo",
    component: Input,
    props: {
      placeholder: "João da Silva",
    },
    className: "",
    required: true,
  },
  {
    name: "phone",
    label: "Número de Telefone",
    component: Input,
    props: {
      placeholder: "(11) 98765-4321",
    },
    className: "",
    required: true,
  },
  {
    name: "role",
    label: "Cargo",
    component: RoleSelect,
    props: {
      placeholder: "Cargo",
    },
    className: "",
  },
  {
    name: "company",
    label: "Organização",
    component: Input,
    props: {
      placeholder: "Empresa XYZ",
    },
    className: "",
  },
];

export const formFieldsSocialLinks = [
  {
    name: "linkedin",
    label: "Linkedin",
    component: Input,
    props: {
      placeholder: "https://www.linkedin.com/in/",
    },
    className: "",
  },
  {
    name: "instagram",
    label: "Instagram",
    component: Input,
    props: {
      placeholder: "https://www.instagram.com/",
    },
    className: "",
  },
  {
    name: "twitter",
    label: "Twitter",
    component: Input,
    props: {
      placeholder: "https://x.com/",
    },
    className: "",
  },
];
