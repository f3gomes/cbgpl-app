import Link from "next/link";
import ParticipantCard from "./participants-card";

// eslint-disable-next-line
export default function ParticipantsList({ participants }: any) {
  return (
    <div className="flex h-full max-w-[700px] flex-col items-center justify-center gap-6 rounded-xl bg-white p-4">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Participants
        </h1>
      </div>

      <div className="grid-flow-cols-2 grid items-center justify-center gap-4">
        {
          // eslint-disable-next-line
          participants.map((item: any, index: number) => (
            <Link href={`/participants/${index}`} key={index}>
              <ParticipantCard
                name={item.name}
                role={item.role}
                funcao={item.funcao}
                image={item.image}
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}
