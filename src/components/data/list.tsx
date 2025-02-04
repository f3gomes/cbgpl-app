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

export const socialIcons = [Linkedin, Instagram, Youtube, Mail];

export const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: FileCheck2 },
  { title: "Feedbacks", icons: MessageSquareText },
];

export const schedule = [
  {
    date: "22 DE ABRIL",
    sessions: [
      {
        id: "ia-futuro-profissao",
        time: "9h - 10h",
        type: "Workshop",
        theme: "IA e o futuro da profissão em gestão de projetos",
        speaker:
          "Americo Pinto, Managing Director of PMO Global Alliance - PMI",
        typeColor: "bg-blue-500",
      },
      {
        id: "estrategias-gestao-agil",
        time: "10h - 11h",
        type: "Palestra",
        theme: "Estratégias para gestão ágil",
        speaker: "Mariana Lima, Especialista em Scrum - PMI",
        typeColor: "bg-purple-500",
      },
    ],
  },
  {
    date: "23 DE ABRIL",
    sessions: [
      {
        id: "tendencias-globais-gerenciamento-projetos",
        time: "9h - 10h",
        type: "Painel",
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
    ],
  },
];

export const formFieldsPersonalData = [
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
    component: Input,
    props: {
      placeholder: "Gerente",
    },
    className: "",
  },
  {
    name: "company",
    label: "Organização",
    component: Input,
    props: {
      placeholder: "Identificação do PMI",
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
