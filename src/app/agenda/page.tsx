import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { MicVocal } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MapPinned } from "lucide-react";
import { UserPen } from "lucide-react";
import { FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/header";

const socialIcons = [Linkedin, Instagram, Youtube, Mail];
const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: UserPen },
  { title: "Feedbacks", icons: FileCheck2 },
];
const schedule = [
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

export default function Agenda() {
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

        <section className="flex h-full flex-row">
          <div className="relative z-10 flex h-full flex-row gap-4">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="relative w-[345px] rounded-[27px] bg-white py-4 pl-3 shadow-md"
              >
                {/* DIV da data */}
                <div className="mx-auto mb-4 flex h-[39px] w-[180px] items-center justify-center rounded-[18px] bg-orange-500 px-4">
                  <h2 className="text-center font-sans text-xl font-extrabold uppercase leading-6 tracking-wider text-white">
                    {day.date}
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  {day.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex h-[240px] w-[325px] flex-col overflow-hidden rounded-[27px] bg-[#35246F] shadow-md"
                    >
                      {/* TOPO ROXO */}
                      <div className="px-4 pt-3 text-center text-white">
                        <span className="font-inter">
                          {session.type} | {session.time}
                        </span>
                      </div>

                      {/* PARTE BRANCA (somente embaixo) */}
                      <div className="mx-1 mb-2 mt-1 flex-1 rounded-b-[27px] bg-white p-2 text-black">
                        <h3 className="mb-2 text-lg">
                          <span className="font-semibold">Tema:</span>{" "}
                          {session.theme}
                        </h3>

                        <p className="mb-4 text-gray-700">
                          <a
                            href="https://www.linkedin.com/in/americopinto"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-black underline"
                          >
                            Americo Pinto
                          </a>
                          , Managing Director of PMO Global Alliance – PMI
                        </p>

                        <div className="flex items-center justify-between px-3">
                          <button className="h-[33px] w-[133px] rounded-[21px] border border-[#35246F] bg-white font-semibold text-[#1B1B1B] transition-colors hover:bg-[#35246F] hover:text-white">
                            Detalhes
                          </button>
                          <button className="h-[33px] w-[133px] rounded-[21px] bg-orange-500 font-semibold text-white transition-colors hover:bg-orange-600">
                            Inscreva-se!
                          </button>
                        </div>
                      </div>
                    </div>
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
