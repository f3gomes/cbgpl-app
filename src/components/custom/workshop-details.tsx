// components/custom/Details.tsx

import { ISession } from "../data/list";

interface DetailsProps {
  session: ISession["session"];
}

export default function Details({ session }: DetailsProps) {
  return (
    <div className="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-md">
      {/* Título */}
      <h2 className="mb-2 text-xl font-bold text-purple-800">
        {session.type}: {session.theme}
      </h2>

      {/* Informações básicas (Data, Horário, Local) */}
      <div className="mb-4 text-sm text-gray-600">
        <span className="mr-4">Data: 22/04/2025</span>
        <span className="mr-4">Horário: {session.time}</span>
        <span className="mr-4">Local: Sala 2</span>
      </div>

      {/* Descrição */}
      <p className="mb-6 text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Palestrante (exemplo) */}
      <div className="mb-6 space-y-4">
        <div className="flex items-start space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200" />
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Palestrante</h3>
            <p className="text-sm text-gray-500">{session.speaker}</p>
            <p className="mt-1 text-xs text-gray-500">
              {/* Informações adicionais sobre o palestrante, se desejar */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>
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
  );
}
