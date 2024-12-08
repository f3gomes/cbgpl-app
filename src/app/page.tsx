import { IoAccessibility } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="flex h-24 w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="h-20 w-auto flex-shrink-0">
            <img
              src="/assets/Design sem nome.png"
              alt="Congresso Logo"
              className="h-25 w-12 object-contain"
            />
          </div>
        </div>
        <nav className="hidden space-x-6 text-gray-600 md:flex">
          <a
            href="#"
            className="flex items-center gap-2 text-base font-medium hover:text-gray-900"
          >
            Início
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-medium hover:text-gray-900"
          >
            Programação
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-medium hover:text-gray-900"
          >
            Notícias
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-base font-medium hover:text-gray-900"
          >
            Fotos
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <IoAccessibility size={20} className="text-[#FFFFFF]" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <IoAccessibility size={20} className="text-[#FFFFFF]" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <IoAccessibility size={20} className="text-[#FFFFFF]" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-7xl flex-grow gap-6 p-6">
        {/* Sidebar */}
        <aside className="w-64 rounded-lg bg-white p-4 shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <IoAccessibility size={20} className="text-[#35246F]" />
            <IoAccessibility size={20} className="text-[#35246F]" />
            <IoAccessibility size={20} className="text-[#35246F]" />
            <IoAccessibility size={20} className="text-[#35246F]" />
          </div>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Palestrantes</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Participantes</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Hotéis Parceiros</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
            <span>Restaurantes Parceiros</span>
          </Button>
          <hr className="my-2 border-gray-300" />
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-1"
          >
            <IoAccessibility size={20} className="text-[#35246F]" />
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
                <IoAccessibility size={16} className="text-[#35246F]" />
                Mídia
              </Button>
              <Button variant="outline">
                <IoAccessibility size={16} className="text-[#35246F]" />
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
