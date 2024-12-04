import Image from "next/image";
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
      <header className="flex w-full items-center justify-between bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="h-14 w-auto">
            <img
              src="/assets/logo preta.png"
              alt="Congresso Logo"
              className="w-100 h-20 object-contain"
            />
          </div>
          <nav className="hidden space-x-6 md:flex">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Início
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Programação
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Notícias
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Fotos
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* Ícones ou notificações */}
          <div className="h-6 w-6 rounded-full bg-orange-500" />
          <div className="h-6 w-6 rounded-full bg-orange-500" />
          <div className="h-6 w-6 rounded-full bg-orange-500" />
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex w-full max-w-7xl flex-grow gap-6 p-6">
        {/* Sidebar */}
        <aside className="w-64 space-y-4 rounded-lg bg-white p-4 shadow-md">
          <Button variant="ghost" className="w-full justify-start">
            Palestrantes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Participantes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Hotéis Parceiros
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Restaurantes Parceiros
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Visitas Indicadas
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Certificações do Congresso
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Feedbacks
          </Button>
        </aside>

        {/* Feed */}
        <section className="flex-grow">
          <Card className="mb-4">
            <CardContent className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <Input
                placeholder="Compartilhe uma publicação"
                className="flex-grow"
              />
              <div className="flex items-center space-x-2">
                <Button variant="outline">Mídia</Button>
                <Button variant="outline">Marcar pessoas</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-grow rounded-lg bg-gray-100 p-4 shadow-inner">
            {/* Conteúdo principal do feed */}
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
          <div className="mb-4 font-semibold text-gray-400">Patrocinado</div>
          <div className="h-32 w-full rounded-lg bg-gray-200" />
        </aside>
      </main>
    </div>
  );
}
