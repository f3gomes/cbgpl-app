import Link from "next/link";
import SpeakerCard from "./speakers-card";

export default function SpeakerList({ speakers }: any) {

  return (
    <div className="flex h-full min-h-[600px] flex-col items-center justify-start gap-6 rounded-xl bg-white p-2 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Speakers
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-2">
        {speakers.map(
          (item: any, index: number) =>
            item.type === "SPEAKER" && (
              <Link href={`/speakers/${index}`} key={index}>
                <SpeakerCard
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              </Link>
            ),
        )}
      </div>
    </div>
  );
}
