import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import { sideIcons, socialIcons } from "@/components/data/list";
import { CircleX } from "lucide-react";

export default function Details() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <div className="flex=col w-full rounded-md bg-white p-6 shadow-lg">
            <div className="relative flex h-[120px] w-[664px] items-center justify-center rounded-[27px] bg-[#35246F] px-4 py-2">
              <button
                type="button"
                className="absolute right-4 top-2 text-gray-400 transition-colors hover:text-gray-200"
                aria-label="Fechar"
              >
                <CircleX />
              </button>
              {/* Texto centralizado */}
              <h2 className="text-[25px] font-bold text-white">
                Palestra: IA e o futuro da profissão em gestão de projetos
              </h2>
            </div>

            {/* Informações de data, horário e local */}
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="font-semibold">Data:</span> 22/04/2025
              </p>
              <p>
                <span className="font-semibold">Horário:</span> 9h - 10h
              </p>
              <p>
                <span className="font-semibold">Local:</span> Sala 2
              </p>
            </div>

            {/* Descrição */}
            <div className="mt-3 text-sm">
              <p>
                Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea.
              </p>
            </div>

            {/* Espaço para palestrantes */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-[70px] w-[90px] items-center justify-center rounded-full bg-[#D9D9D9]" />
                <div>
                  <p className="font-semibold">Palestrante</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-semibold">Nome</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            {/* Botões: Feedback, Material e Inscreva-se */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Feedback
              </button>
              <button
                type="button"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Material
              </button>
              <button
                type="button"
                className="rounded bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
              >
                Inscreva-se!
              </button>
            </div>
          </div>

          <AsideRight />
        </main>
      </div>
    </>
  );
}
