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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="relative flex h-[134px] w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="flex-shrink-0">
            <Image
              width={215}
              height={78}
              src="/assets/Design_sem_nome-removebg-preview.png"
              alt="Congresso Logo"
              className="object-contain"
            />
          </div>
        </div>
        <nav
          className="absolute flex items-center justify-between"
          style={{
            width: "586px",
            height: "25px",
            top: "54px",
            left: "422px",
            right: "423px",
            margin: "0 auto",
          }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-base font-medium text-black hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4 p-4">
          {topIcons.map((Item, index) => (
            <button
              key={index}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600"
            >
              <Item size={20} className="text-[#FFFFFF]" />
            </button>
          ))}
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto flex max-w-full flex-grow gap-4 p-6">
        {/* Sidebar */}
        <aside
          className="rounded-2xl bg-white p-4 shadow-md"
          style={{
            width: "330px",
            height: "600px",
            top: "156px",
            left: "33px",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
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

          <div>
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

        {/* Feed */}
        <section className="flex flex-col items-center">
          <Card
            className="rounded-2xl p-4 shadow-md"
            style={{
              width: "699px",
              height: "160px",
            }}
          >
            <div className="mt-1 flex items-center gap-4">
              {/* Avatar do usuário */}
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F3F3F3]"></div>
              <Input
                placeholder="Compartilhe uma publicação"
                className="h-[72px] w-[537px] flex-grow rounded-3xl bg-[#F3F3F3]"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" className="[&_svg]:h-6 [&_svg]:w-6">
                <Images size={16} className="text-[#35246F]" />
                Mídia
              </Button>
              <Button variant="outline" className="[&_svg]:h-6 [&_svg]:w-6">
                <UserSearch size={16} className="text-[#35246F]" />
                Marcar pessoas
              </Button>
            </div>
          </Card>
          <Card className="mt-6 w-full flex-grow rounded-2xl bg-[#F3F3F3] p-4 shadow-inner">
            <CardHeader>
              <CardTitle>Postagens Recentes</CardTitle>
              <CardDescription>
                Aqui você encontrará as últimas atualizações do Congresso.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Conteúdo adicional pode ser adicionado aqui */}
            </CardContent>
          </Card>
        </section>

        {/* Patrocinado Sidebar */}
        <aside
          className="rounded-2xl bg-white p-4 shadow-md"
          style={{
            width: "330px",
            height: "600px",
            top: "156px",
            left: "1083px",
          }}
        >
          <hr className="my-4 border-gray-300" />
          <div className="mb-4 flex items-center gap-2 font-semibold text-gray-400">
            <span>Patrocinado</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
