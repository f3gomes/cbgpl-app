import { ISession } from "../data/list";

export default function WorkshopCard({ session }: ISession) {
  return (
    <div className="relative mx-1 mb-1 mt-1 flex-1 rounded-b-[27px] bg-white p-2 text-black">
      <h3 className="mb-2 text-lg">
        <span className="font-semibold">Tema:</span> {session.theme}
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

      <div className="absolute bottom-4 flex items-center justify-between gap-3 px-3">
        <button className="h-[33px] w-[133px] rounded-[21px] border border-orange-500 bg-white font-semibold text-[#1B1B1B]">
          Detalhes
        </button>
        <button className="h-[33px] w-[133px] rounded-[21px] bg-orange-500 font-semibold text-white transition-colors hover:bg-orange-600">
          Inscreva-se!
        </button>
      </div>
    </div>
  );
}
