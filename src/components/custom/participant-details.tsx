import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ParticipantCardProps } from "./participants-card";
import { Card } from "../ui/card";

export default function ParticipantDetails({
  name,
  image,
}: ParticipantCardProps) {
  return (
    <div className="flex h-full max-w-[700px] flex-col items-center justify-center rounded-xl bg-white">
      <div className="flex gap-3 p-4">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={350}
            height={350}
            src={"/assets/profile.jpeg"}
            alt={image}
            className="h-[350px] w-[270px] rounded-xl object-cover"
          />

          <Link href={"/participants"} className="w-full">
            <Button className="h-[45px] w-full rounded-full bg-[#35246F] text-lg font-semibold transition duration-200 hover:bg-[#35246F]">
              TODOS OS PARTICIPANTES
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Card className="flex h-[350px] w-[390px] flex-col items-start gap-3 bg-[#F3F3F3]">
            <div className="h-[300px] w-[360px] p-4">
              <h1 className="text-3xl font-bold lg:text-xl">{name}</h1>
              <div className="text-justify text-sm font-medium md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea.
              </div>
            </div>
          </Card>
          <div className="flex h-[45px] w-[390px] items-center rounded-full border-[3px] border-black px-4 text-lg font-semibold">
            Grupo de Interesse:
          </div>
        </div>
      </div>
    </div>
  );
}
