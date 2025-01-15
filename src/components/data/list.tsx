import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { UserPen } from "lucide-react";
import { FileCheck2 } from "lucide-react";

export interface ISession {
  time: string;
  type: string;
  theme: string;
  speaker: string;
  typecolor: string;
}

export const socialIcons = [Linkedin, Instagram, Youtube, Mail];

export const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: UserPen },
  { title: "Feedbacks", icons: FileCheck2 },
];

export const schedule = [
  {
    date: "22 DE ABRIL",
    sessions: [
      {
        time: "9h - 10h",
        type: "Workshop",
        theme: "IA e o futuro da profissão em gestão de projetos",
        speaker:
          "Americo Pinto, Managing Director of PMO Global Alliance - PMI",
        typeColor: "bg-blue-500",
      },
      {
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
        time: "9h - 10h",
        type: "Painel",
        theme: "Tendências globais em gerenciamento de projetos",
        speaker: "João Silva, Diretor de Inovação - PMO Alliance",
        typeColor: "bg-orange-500",
      },
      {
        time: "11h - 12h",
        type: "Workshop",
        theme: "Ferramentas tecnológicas no gerenciamento de equipes",
        speaker: "Ana Souza, CTO da PM Tech",
        typeColor: "bg-teal-500",
      },
    ],
  },
];
