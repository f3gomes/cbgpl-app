import { CircleX } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

export default function WorkshopDetails() {
  return (
    <Card className="w-full rounded-2xl bg-white p-3 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="rounded-[30px] border-4 border-gray-200 border-t-white bg-white">
        <div className="relative mx-auto flex h-[120px] w-full items-center rounded-[27px] bg-[#35246F] p-4 shadow-xl">
          <Link
            href={`/schedule`}
            type="button"
            className="absolute right-4 top-2 text-gray-300 transition-colors hover:text-gray-100"
            aria-label="Fechar"
          >
            <CircleX />
          </Link>
          <h2 className="ml-1 w-[572px] p-1 text-start text-2xl font-bold text-white">
            Palestra: IA e o futuro da profissão em gestão de projetos
          </h2>
        </div>
        {/* Descrição, palestrantes etc. */}
        <div className="p-6 text-xl">
          {/* Bloco com Data, Horário à esquerda e Local à direita */}
          <div className="flex w-full items-start justify-between">
            <div>
              <p>
                <span className="font-semibold">Data:</span>{" "}
                <span className="font-inter">22/04/2025</span>
              </p>
              <p>
                <span className="font-semibold">Local:</span>{" "}
                <span className="font-inter">Sala 2</span>
              </p>
            </div>
            <div className="mr-12">
              <p>
                <span className="font-semibold">Horário:</span>{" "}
                <span className="font-inter">9h - 10h</span>
              </p>
            </div>
          </div>

          {/* Descrição embaixo */}
          <p className="mt-6 text-justify">
            <span className="font-semibold">Descrição:</span>{" "}
            <span className="font-inter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </span>
          </p>
        </div>

        <div className="mt-2">
          <div className="flex h-[90px] items-center space-x-3 p-6">
            <div className="h-[90px] w-[90px] shrink-0 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className="text-[16px] font-semibold">Palestrante</p>
              <p className="text-[16px] font-semibold">Nome</p>
              <p className="font-inter text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-6">
            <div className="h-[90px] w-[90px] shrink-0 rounded-full bg-[#D9D9D9]" />
            <div>
              <p className="text-[16px] font-semibold">Palestrante</p>
              <p className="text-[16px] font-semibold">Nome</p>
              <p className="font-inter text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Palestrantes, botões etc. */}
        <div className="flex justify-center gap-3 p-6 align-middle sm:flex-row">
          <Link
            href={`/details`}
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl"
          >
            Feedback
          </Link>
          <Link
            href={`/details`}
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border border-orange-400 bg-white px-12 text-base font-semibold text-[#1B1B1B] sm:text-lg md:text-xl"
          >
            Material
          </Link>
          <Link
            href="https://pontoonline.com.br/20cbgpl/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center justify-center overflow-hidden whitespace-nowrap rounded-[21px] border bg-orange-500 px-14 py-2 text-base font-semibold text-white sm:text-lg md:text-xl"
          >
            Inscreva-se!
          </Link>
        </div>
      </div>
    </Card>
  );
}
