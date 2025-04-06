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
    typeColor: string;
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
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "ia-futuro-profissao",
    time: "9h - 10h",
    type: "Workshop",
    theme: "IA e o Futuro da Profissão em Gestão de Projetos",
    speaker: "Americo Pinto",
    typeColor: "bg-blue-500",
  },
  {
    id: "overview-pmi-carolina-latorre",
    time: "09:30 - 09:50",
    type: "Plenária",
    theme: "Overview PMI",
    speaker: "Carolina Latorre",
    typeColor: "",
  },
  {
    id: "escritorio-gerenciamento-pmo",
    time: "09:50 - 10:50",
    type: "Plenária",
    theme: "Escritório de Gerenciamento de Projetos – PMO",
    speaker: "Américo Pinto",
    typeColor: "",
  },
  {
    id: "estrategias-gestao-agil",
    time: "10h - 11h",
    type: "Palestra",
    theme: "Estratégias para Gestão Ágil",
    speaker: "Mariana Lima",
    typeColor: "bg-purple-500",
  },
  {
    id: "como-acelerar-vmo",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Como Acelerar os 3 Pilares do VMO Ágil",
    speaker: "Antonio Muniz",
    typeColor: "",
  },
  {
    id: "avaliacao-maturidade-esg",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Experiência de Uma Jornada de Avaliação de Maturidade de Práticas ESG Numa Organização Sem Fins Lucrativos",
    speaker: "Everaldo Artur Grahl",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador-monday-nortrez",
    time: "11:20 - 12:00",
    type: "Patrocinador",
    theme: "Espaço Patrocinador",
    speaker: "Monday + Nortrez",
    typeColor: "",
  },
  {
    id: "gestao-mudanca-neuroplasticidade",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gestão de Mudança e a Neuroplasticidade Cerebral",
    speaker: "Driéle Castro",
    typeColor: "",
  },
  {
    id: "gerenciamento-egos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Gerenciamento de Egos: O Que Apenas a Experiência Ensina?",
    speaker: "Anderson Marques Nunes",
    typeColor: "",
  },
  {
    id: "experiencia-congressista",
    time: "13:00 - 13:30",
    type: "Experiência",
    theme: "Experiência Congressista",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "workshop-design-thinking-lego",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme:
      "Design Thinking + Lego Serious Play Para Planejamento Estratégico (Experience)",
    speaker: "Sergio Nascimento",
    typeColor: "",
  },
  {
    id: "workshop-projetizacao-pocket",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "Projetização Pocket",
    speaker: "Pedro Paulo Coutinho e Felipe Borges",
    typeColor: "",
  },
  {
    id: "workshop-pm-canvas-chatgpt",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PM Canvas com ChatGPT",
    speaker: "Bernardo Zurli",
    typeColor: "",
  },
  {
    id: "workshop-pmo-ao-vmo",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "PMO ao VMO: Construindo um Escritório de Valor na Prática",
    speaker: "Marcelo Antonelli",
    typeColor: "",
  },
  {
    id: "case-patrocinador-moldsoft",
    time: "13:30 - 13:50",
    type: "Patrocinador",
    theme: "Case Patrocinador",
    speaker: "Moldsoft",
    typeColor: "",
  },
  {
    id: "painel-ceos",
    time: "13:50 - 14:30",
    type: "Painel",
    theme:
      "Da Estratégia à Execução: O Impacto da Liderança na Gestão de Projetos",
    speaker: "Cassio, Patriciana e Murilo",
    typeColor: "",
  },
  {
    id: "premio-melhores-projetos",
    time: "14:30 - 15:30",
    type: "Premiação",
    theme: "Prêmio Melhores do Ano: Categoria Projetos",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "case-patrocinador-zoho",
    time: "15:30 - 15:50",
    type: "Patrocinador",
    theme: "Case Patrocinador",
    speaker: "Zoho",
    typeColor: "",
  },
  {
    id: "debate-executivo",
    time: "16:20 - 17:00",
    type: "Debate Executivo",
    theme: "Gestão de Projetos Públicos e Privados: Conexões e Desafios",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "workshop-ai-inception",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme: "AI Inception: Da Necessidade à Viabilidade",
    speaker: "Rafael Vilela",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador-alvarez",
    time: "16:20 - 18:00",
    type: "Patrocinador",
    theme: "Espaço Patrocinador",
    speaker: "Alvarez",
    typeColor: "",
  },
  {
    id: "ia-revolucao-gerenciamento",
    time: "16:20 - 18:00",
    type: "Palestra",
    theme: "Como os Agentes de IA Podem Revolucionar o Gerenc. de Proj.",
    speaker: "Victor Dantas",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador-zoho",
    time: "16:20 - 18:00",
    type: "Patrocinador",
    theme: "Espaço Patrocinador",
    speaker: "Zoho",
    typeColor: "",
  },
  {
    id: "workshop-gestao-projetos-sociais",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme:
      "Gestão de Projetos Sociais: Estratégias para Gerar Impacto Positivo",
    speaker: "Elisangela Machado",
    typeColor: "",
  },
  {
    id: "case-patrocinador-monday-nortrez",
    time: "17:00 - 17:20",
    type: "Patrocinador",
    theme: "Case Patrocinador",
    speaker: "Monday + Nortrez",
    typeColor: "",
  },
  {
    id: "painel-vmo",
    time: "17:20 - 18:00",
    type: "Painel",
    theme: "Painel sobre Value Management Office (VMO)",
    speaker: "Mirian Leite, Erica Smith, Marcelo Antonelli e Fábio Cruz",
    typeColor: "",
  },
  {
    id: "sorteios",
    time: "18:00 - 18:10",
    type: "Sorteios",
    theme: "Sorteios",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "futuro-trabalho-ai",
    time: "18:10 - 19:10",
    type: "Palestra",
    theme:
      "O Futuro do Trabalho e os Impactos da AI na Profissão de Gerenciamento de Projetos",
    speaker: "Ricardo Vargas",
    typeColor: "",
  },
];

export const sessionsDayTwo = [
  {
    id: "cerimonia-abertura-boas-vindas-dia2",
    time: "09:00 - 09:10",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-Vindas",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "experiencia-regional",
    time: "09:10 - 09:25",
    type: "Palestra",
    theme: "Experiência Regional",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "lancamento-cbgp-2025",
    time: "09:25 - 09:30",
    type: "Palestra",
    theme: "Lançamento do CBGP 2025",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "palestra-gino-terentim",
    time: "09:30 - 10:30",
    type: "Palestra",
    theme: "Gestão Sustentável de Projetos",
    speaker: "Gino Terentim",
    typeColor: "",
  },
  {
    id: "margareth-chanwin-agile-alliance",
    time: "10:30 - 10:50",
    type: "Palestra",
    theme: "PMI Agile Alliance: O Futuro dos Profissionais de Projetos",
    speaker: "Margareth Chanwin",
    typeColor: "",
  },
  {
    id: "coffee-break",
    time: "10:50 - 11:20",
    type: "Networking",
    theme: "COFFEE BREAK",
    speaker: "",
    typeColor: "",
  },
  {
    id: "sustentabilidade-em-mega-projetos-desafios-e-oportunidades",
    time: "11:20 - 12:00",
    type: "Painel",
    theme: "Sustentabilidade em Mega Projetos: Desafios e Oportunidades",
    speaker: "Kelly Anselmo, Mateus Freire, Maiza Pimenta, Andrea Oliveira",
    typeColor: "",
  },
  {
    id: "amazonia-gerenciamento-de-projetos-sustentaveis-com-impacto-social-positivo",
    time: "11:20 - 12:00",
    type: "Case",
    theme:
      "Amazônia - Gerenciamento de Projetos Sustentáveis com Impacto Social Positivo",
    speaker: "Felipe Borges",
    typeColor: "",
  },
  {
    id: "projeto-de-conversao-de-aeronaves-de-passageiros-e190-em-e190f-cargueiras",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Projeto de Conversão de Aeronaves de Passageiros E190 em E190F Cargueiras",
    speaker: "Marcelo Tocci - EMBRAER",
    typeColor: "",
  },
  {
    id: "otimizando-a-jornada-do-time-aplicando-o-dojo-em-metricas-com-auxilio-da-ia-em-projetos",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Otimizando a Jornada do Time: Aplicando o Dojô em Métricas com Auxílio da IA em Projetos",
    speaker: "Fabio Henrique",
    typeColor: "",
  },
  {
    id: "mediacao-de-conflitos-e-a-gestao-de-projetos-uma-dupla-perfeita",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Mediação de Conflitos e a Gestão de Projetos - Uma dupla perfeita!",
    speaker: "Antônio Duarte",
    typeColor: "",
  },
  {
    id: "sao-joao-de-caruaru-como-planejar-e-gerenciar-o-maior-projeto-de-entretenimento-do-mundo",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme:
      "São João de Caruaru: Como Planejar e Gerenciar o Maior Projeto de Entretenimento do Mundo",
    speaker: "Marcio Gomes",
    typeColor: "",
  },
  {
    id: "seu-comportamento-esta-te-sabotando-e-voce-nem-sabe",
    time: "13:00 - 13:40",
    type: "Palestra",
    theme: "Seu Comportamento Está te Sabotando e Você nem Sabe",
    speaker: "Carlos Silva Jr - SLUPER",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador",
    time: "13:00 - 13:40",
    type: "Patrocinador",
    theme: "Espaço Patrocinador",
    speaker: "FIOCRUZ",
    typeColor: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas-networking-pre-workshop",
    time: "13:00 - 16:00",
    type: "Workshop",
    theme:
      "Uncertainty Cycle: Gerenciamento de Incertezas (Networking Pré-Workshop)",
    speaker: "Ricardo Vargas",
    typeColor: "",
  },
  {
    id: "perspicacia-empresarial-estrategias-de-gestao-para-transformar-criatividade-em-resultados-sustentaveis",
    time: "14:00 - 14:40",
    type: "Palestra",
    theme:
      "Perspicácia Empresarial: Estratégias de Gestão Para Transformar Criatividade em Resultados Sustentáveis",
    speaker: "Lia Quinderé",
    typeColor: "",
  },
  {
    id: "construindo-sua-persona-de-lideranca-um-guia-baseado-nos-seus-pontos-fortes",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme:
      "Construindo Sua Persona de Liderança: Um Guia Baseado Nos Seus Pontos Fortes",
    speaker: "Ricardo Peters",
    typeColor: "",
  },
  {
    id: "estimativas-ageis-poemas-que-transformam-planejamento",
    time: "14:00 - 16:00",
    type: "Workshop",
    theme: "Estimativas Ágeis: Poemas que Transformam Planejamento",
    speaker: "Sarah Branco",
    typeColor: "",
  },
  {
    id: "melhores-do-ano",
    time: "14:40 - 15:40",
    type: "Premiação",
    theme: "Melhores do Ano",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "coffee-break-2",
    time: "16:00 - 16:30",
    type: "Networking",
    theme: "COFFEE BREAK",
    speaker: "",
    typeColor: "",
  },
  {
    id: "lideranca-feminina",
    time: "16:30 - 17:10",
    type: "Painel",
    theme: "Liderança Feminina",
    speaker: "Delania Santos, Annete Castro, Simone Caixeta, Fernanda Colares",
    typeColor: "",
  },
  {
    id: "uncertainty-cycle-gerenciamento-de-incertezas",
    time: "16:30 - 17:50",
    type: "Workshop",
    theme: "Uncertainty Cycle - Gerenciamento de Incertezas",
    speaker: "Ricardo Vargas",
    typeColor: "",
  },
  {
    id: "resultado-melhores-do-ano-projetos-e-pmo",
    time: "17:10 - 17:30",
    type: "Premiação",
    theme: "Resultado Melhores do Ano - Projetos e PMO",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "case-patrocinador",
    time: "17:30 - 17:50",
    type: "Patrocinador",
    theme: "Case Patrocinador",
    speaker: "FIOCRUZ",
    typeColor: "",
  },
  {
    id: "sorteio",
    time: "17:50 - 18:00",
    type: "Sorteio",
    theme: "Sorteio",
    speaker: "Cristiano Oliveira",
    typeColor: "",
  },
  {
    id: "impacto-social-esg-gestao-de-projetos-sociais",
    time: "18:00 - 19:00",
    type: "Palestra",
    theme: "Impacto Social - ESG, Gestão de Projetos Sociais",
    speaker: "Andrea Cardoso",
    typeColor: "",
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
