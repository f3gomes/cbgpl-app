import Link from "next/link";
import SpeakerCard from "./speakers-card";

// eslint-disable-next-line
export default function SpeakerList({ speakers }: any) {
  return (
    <div className="flex h-full w-[700px] flex-col items-center justify-center gap-6 bg-white p-2 rounded-xl">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Palestrantes
        </h1>
      </div>

      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {
          // eslint-disable-next-line
          speakers.map((item: any, index: number) => (
            <Link href={`/speakers/${index}`} key={index}>
              <SpeakerCard
                name={item.name}
                role={item.role}
                image={item.image}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
