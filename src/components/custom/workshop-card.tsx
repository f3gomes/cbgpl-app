import { ISession } from "@/data/list";
import { subText } from "@/lib/utils";

import Link from "next/link";

export default function WorkshopCard({ session }: ISession) {
  return (
    <div className="relative mx-1 mb-2 mt-1 max-h-60 min-h-60 flex-1 rounded-b-[27px] bg-white p-2 pb-16 text-black">
      <div className="h-48 flex flex-col justify-between">
        <h3 className="mb-2 text-lg">
          <span className="font-semibold">Tema:</span> {session.theme}
        </h3>

        <p className="mb-4 p-1 text-gray-700">
          <span className="font-semibold text-black underline">
            {subText(session.speaker, 100)}
          </span>
        </p>
      </div>

      <div className="absolute bottom-4 flex items-center justify-between gap-3 px-3">
        <Link
          href={`/details/${session.id}`}
          className="flex h-[33px] w-[133px] items-center justify-center rounded-[21px] border border-orange-400 bg-white font-semibold text-[#1B1B1B]"
        >
          Detalhes
        </Link>
        <Link
          href="https://pontoonline.com.br/20cbgpl/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[33px] w-[133px] items-center justify-center rounded-[21px] bg-orange-500 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Inscreva-se!
        </Link>
      </div>
    </div>
  );
}
