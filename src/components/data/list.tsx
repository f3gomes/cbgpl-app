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
    id: "ia-futuro-profissao",
    time: "9h - 10h",
    type: "Workshop",
    theme: "IA e o futuro da profissão em gestão de projetos",
    speaker: "Americo Pinto",
    typeColor: "bg-blue-500",
  },
  {
    id: "estrategias-gestao-agil",
    time: "10h - 11h",
    type: "Palestra",
    theme: "Estratégias para gestão ágil",
    speaker: "Mariana Lima",
    typeColor: "bg-purple-500",
  },
  {
    id: "cerimonia-abertura-boas-vindas",
    time: "09:00 - 09:30",
    type: "Cerimônia",
    theme: "Cerimônia de Abertura e Boas-vindas (Plenária)",
    speaker: "Cristiano Oliveira",
    typeColor: "",
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
    id: "como-acelerar-vmo",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme: "Como acelerar os 3 pilares do VMO ágil",
    speaker: "Antonio Muniz",
    typeColor: "",
  },
  {
    id: "avaliacao-maturidade-esg",
    time: "11:20 - 12:00",
    type: "Palestra",
    theme:
      "Experiência de uma Jornada de Avaliação de Maturidade de Práticas ESG numa organização sem fins lucrativos",
    speaker: "Everaldo Artur Grahl",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador-monday-nortrez",
    time: "11:20 - 12:00",
    type: "Patrocinador",
    theme: "Espaço patrocinador",
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
    theme: "Gerenciamento de Egos: O que apenas a experiência ensina?",
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
      "Design Thinking + Lego Serious Play para Planejamento Estratégico (Experience)",
    speaker: "Sergio Nascimento",
    typeColor: "",
  },
  {
    id: "workshop-projetizacao-pocket",
    time: "13:30 - 15:30",
    type: "Workshop",
    theme: "ProjetizAÇÃO Pocket",
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
      "Da estratégia à execução: O impacto da liderança na gestão de projetos",
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
    theme: "Espaço patrocinador",
    speaker: "Alvarez",
    typeColor: "",
  },
  {
    id: "ia-revolucao-gerenciamento",
    time: "16:20 - 18:00",
    type: "Palestra",
    theme: "Como os agentes de IA podem revolucionar o gerenc. de proj.",
    speaker: "Victor Dantas",
    typeColor: "",
  },
  {
    id: "espaco-patrocinador-zoho",
    time: "16:20 - 18:00",
    type: "patrocinador",
    theme: "Espaço patrocinador",
    speaker: "Zoho",
    typeColor: "",
  },
  {
    id: "workshop-gestao-projetos-sociais",
    time: "16:20 - 18:00",
    type: "Workshop",
    theme:
      "Gestão de Projetos Sociais: Estratégias para gerar impacto positivo",
    speaker: "Elisangela Machado",
    typeColor: "",
  },
  {
    id: "case-patrocinador-monday-nortrez",
    time: "17:00 - 17:20",
    type: "Patrocinador",
    theme: "Case patrocinador",
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
    id: "tendencias-globais-gerenciamento-projetos",
    time: "9h - 10h",
    type: "Palestra",
    theme: "Tendências globais em gerenciamento de projetos",
    speaker: "João Silva, Diretor de Inovação - PMO Alliance",
    typeColor: "bg-orange-500",
  },
  {
    id: "ferramentas-tecnologias-gerenciamento-equipes",
    time: "11h - 12h",
    type: "Workshop",
    theme: "Ferramentas tecnológicas no gerenciamento de equipes",
    speaker: "Ana Souza, CTO da PM Tech",
    typeColor: "bg-teal-500",
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
