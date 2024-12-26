import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { Images } from "lucide-react";
import { UserSearch } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { UserPen } from "lucide-react";
import { FileCheck2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Header from "@/components/custom/header";

const topIcons = [MessageCircle, Bell, CircleUserRound];
const socialIcons = [Linkedin, Instagram, Youtube, Mail];
const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: UserPen },
  { title: "Feedbacks", icons: FileCheck2 },
];
const navItems = [
  { title: "Início", link: "/" },
  { title: "Programação", link: "/" },
  { title: "Notícias", link: "/" },
  { title: "Fotos", link: "/" },
];
const schedule = [
  {
    date: "22 de Abril",
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
    date: "23 de Abril",
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
        <aside className="flex h-12 w-full flex-col items-center rounded-2xl px-4 shadow-md xl:h-[600px] xl:w-[330px] xl:p-4 xl:px-0">
          <div className="mt-2 flex w-full justify-between xl:mt-0">
            {socialIcons.map((Item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="[&_svg]:h-6 [&_svg]:w-6"
              >
                <Item size={64} className="text-[#35246F]" />
              </Button>
            ))}
          </div>

          <div className="hidden xl:block">
            {sideIcons.map((Item, index) => (
              <div key={index}>
                <hr className="my-2 border-gray-300" />
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <Item.icons size={40} className="text-[#35246F]" />
                  <span className="font-inter text-lg">{Item.title}</span>
                </Button>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex h-full flex-row gap-6">
          <div className="relative z-10 flex h-full flex-row gap-4 p-6">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="relative w-[345px] rounded-[27px] bg-white p-4 shadow-md"
              >
                {/* Fundo branco atrás do conteúdo */}
                <div className="absolute inset-0 -z-10 rounded-[27px] bg-white shadow-md"></div>

                <h2 className="font-inter mb-4 text-xl hover:bg-orange-500">
                  {day.date}
                </h2>
                <div className="flex flex-col gap-4">
                  {day.sessions.map((session, idx) => (
                    <Card
                      key={idx}
                      className="rounded-[27px] bg-white p-4 shadow-md"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <span
                          className={`rounded px-3 py-1 text-sm font-bold text-white ${session.typeColor}`}
                        >
                          {session.type}
                        </span>
                        <span className="text-gray-600">{session.time}</span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        Tema: {session.theme}
                      </h3>
                      <p className="mb-4 text-gray-600">
                        Palestrante: <strong>{session.speaker}</strong>
                      </p>
                      <div className="flex justify-between">
                        <Button variant="outline" className="text-orange-500">
                          Detalhes
                        </Button>
                        <Button className="bg-orange-500 text-white">
                          Inscreva-se!
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="h-[600px] w-[330px] rounded-2xl bg-white p-4 shadow-md">
          <hr className="my-4 border-gray-300" />
          <div className="mb-4 flex items-center gap-2 font-semibold text-gray-400">
            <span>Patrocinado</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
