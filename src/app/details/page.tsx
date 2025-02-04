import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import { schedule, sideIcons, socialIcons } from "@/components/data/list";

export default function Details() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <div className="w-full rounded-lg bg-white p-6">
            {/* Título (tipo + tema) */}
            <div className="h-[120px] rounded-2xl bg-[#35246F] p-3">
              <h2 className="mb-2 text-xl font-bold text-white">
                Workshop: IA e o futuro da profissão em gestão de projetos
              </h2>
            </div>
            {/* Informações (Data, Horário, Local) */}
            <div className="mb-4 text-sm text-gray-600">
              <span className="mr-4">Data: 22/04/2025</span>
              <span className="mr-4">Horário: 9h - 10h</span>
              <span className="mr-4">Local: Sala 2</span>
            </div>

            {/* Descrição fixa ou genérica */}
            <p className="mb-6 text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Palestrante(s) */}
            <div className="mb-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Palestrante
                  </h3>
                  <p className="text-sm text-gray-500">
                    Nome do palestrante (Ex: Americo Pinto)
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Pequena bio ou descrição adicional.
                  </p>
                </div>
              </div>
              {/* Caso tenha mais palestrantes, você pode replicar esse bloco. */}
            </div>

            {/* Botões de ação */}
            <div className="flex space-x-2">
              <button
                type="button"
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
              >
                Feedback
              </button>
              <button
                type="button"
                className="rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300"
              >
                Material
              </button>
              <button
                type="button"
                className="rounded-md bg-orange-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-orange-600"
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
