import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { FileCheck2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import VisibleSelect from "@/components/custom/visible-select";
import RoleSelect from "@/components/custom/role-select";
import MultiSelect from "@/components/custom/multi-select";

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
  { title: "Materiais", link: "#" },
];

export const navItemsMobile = [
  { title: "Início", link: "/", target: false },
  { title: "Programação", link: "/schedule", target: false },
  { title: "Materiais", link: "/", target: false },
  { title: "Palestrantes", link: "/speakers", target: false },
  { title: "Participantes", link: "/participants", target: false },
  {
    title: "Experiência",
    link: "https://cbgpl.org.br/wp-content/uploads/2025/04/Book-de-Experiencias-CBGPL-2025-.pdf",
    target: true,
  },
  {
    title: "Certificado",
    link: "https://pontoonline.com.br/20cbgpl/login",
    target: true,
  },
  { title: "Fotos", link: "/", target: false },
  { title: "Feedback", link: "/", target: false },
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
    href: "https://chat.whatsapp.com/FFAuX8040Wt6TjIoUgXYP8",
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
  {
    title: "Livro de experiência",
    icons: MapPinned,
    href: "https://cbgpl.org.br/wp-content/uploads/2025/04/Book-de-Experiencias-CBGPL-2025-.pdf",
    target: true,
  },
  {
    title: "Certificação do Congresso",
    icons: FileCheck2,
    href: "https://pontoonline.com.br/20cbgpl/login",
    target: true,
  },
  { title: "Feedback", icons: MessageSquareText, href: "/", target: false },
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
