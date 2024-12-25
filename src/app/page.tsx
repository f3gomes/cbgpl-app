import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import { Images } from "lucide-react";
import { UserSearch } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/custom/header";

const socialIcons = [Linkedin, Instagram, Youtube, Mail];

const sideIcons = [
  { title: "Palestrantes", icons: MicVocal },
  { title: "Participantes", icons: UsersRound },
  { title: "Espaço experiência", icons: MapPinned },
  { title: "Certificações do Congresso", icons: UserPen },
  { title: "Feedbacks", icons: FileCheck2 },
];

export default function HomePage() {
  return (
    <div className="flex w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-2 lg:flex-row lg:p-6">
        <aside className="h-12 w-full items-center rounded-2xl bg-white px-4 shadow-md lg:h-[600px] lg:w-[330px] lg:p-4 lg:px-0">
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

          <div className="hidden lg:block">
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

        <section className="flex flex-col items-center">
          <Card className="h-[160px] w-[699px] rounded-2xl p-4 shadow-md">
            <div className="mt-1 flex items-center gap-4">
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
            <CardContent></CardContent>
          </Card>
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
