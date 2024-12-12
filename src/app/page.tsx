import { IoAccessibility } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlinePermMedia } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { PiMicrophoneStage } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { IoIosRestaurant } from "react-icons/io";
import { TbMapSearch } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

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
          <a
            href="#"
            className="text-base font-medium text-black hover:text-gray-900"
          >
            Início
          </a>
          <a
            href="#"
            className="text-base font-medium text-black hover:text-gray-900"
          >
            Programação
          </a>
          <a
            href="#"
            className="text-base font-medium text-black hover:text-gray-900"
          >
            Notícias
          </a>
          <a
            href="#"
            className="text-base font-medium text-black hover:text-gray-900"
          >
            Fotos
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <FaUserCircle size={20} className="text-[#FFFFFF]" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <IoNotifications size={20} className="text-[#FFFFFF]" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <IoIosChatboxes size={20} className="text-[#FFFFFF]" />
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-7xl flex-grow gap-6 p-6">
        {/* Sidebar */}
        <aside className="w-64 rounded-lg bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <Button variant="ghost">
              <SiInstagram size={20} className="text-[#35246F]" />
            </Button>
            <Button variant="ghost">
              <GrLinkedin size={20} className="text-[#35246F]" />
            </Button>
            <Button variant="ghost">
              <AiOutlineYoutube size={20} className="text-[#35246F]" />
            </Button>
            <Button variant="ghost">
              <LuMail size={20} className="text-[#35246F]" />
            </Button>
          </div>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <PiMicrophoneStage size={20} className="text-[#35246F]" />
            <span>Palestrantes</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <PiUsersThree size={20} className="text-[#35246F]" />
            <span>Participantes</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <LiaHotelSolid size={20} className="text-[#35246F]" />
            <span>Hotéis Parceiros</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoIosRestaurant size={20} className="text-[#35246F]" />
            <span>Restaurantes Parceiros</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <TbMapSearch size={20} className="text-[#35246F]" />
            <span>Visitas Indicadas</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Certificações do Congresso</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Feedbacks</span>
          </Button>
        </aside>
        {/* Feed */}
        <section className="flex-grow">
          <Card className="mb-4 p-4">
            <div className="flex items-center gap-4">
              {/* Avatar do usuário */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300"></div>
              <Input
                placeholder="Compartilhe uma publicação"
                className="flex-grow"
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline">
                <MdOutlinePermMedia size={16} className="text-[#35246F]" />
                Mídia
              </Button>
              <Button variant="outline">
                <FaUserTag size={16} className="text-[#35246F]" />
                Marcar pessoas
              </Button>
            </div>
          </Card>
          <Card className="flex-grow rounded-lg bg-gray-100 p-4 shadow-inner">
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
        <aside className="w-64 rounded-lg bg-white p-4 shadow-md">
          <div className="mb-4 flex items-center gap-2 font-semibold text-gray-400">
            <span>Patrocinado</span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gray-200"></div>
        </aside>
      </main>
    </div>
  );
}
