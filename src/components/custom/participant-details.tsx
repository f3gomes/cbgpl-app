"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import { getUserById } from "@/actions/getUserById";
import { SquareUserRound } from "lucide-react";

interface ParticipantDetailsProps {
  id: string;
}

const areasNames: any = {
  ga: "Gestão Ágil",
  sp: "Setor Público",
  pm: "PMO",
  cc: "Carreira e Certificações",
  ia: "Inteligência Artificial em Projetos",
  ge: "Liderança e Gestão de Equipes",
  pv: "Sustentabilidade e Projetos Verdes",
};

export default function ParticipantDetails({ id }: ParticipantDetailsProps) {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data: any = await getUserById(id);

        if (data?.response?.data?.message) {
          console.log(data?.response?.data?.message);
        }

        if (data?.data?.updatedUser) {
          setUser(data?.data?.updatedUser);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [id]);

  const interests = areasNames[user?.areas[0]];

  return (
    <div className="flex h-full min-h-[600px] flex-col items-center justify-start rounded-xl bg-white shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="flex flex-col gap-3 p-4 sm:flex-row">
        <div className="flex flex-col items-center justify-between gap-4">
          {user?.profileImgUrl === "" ? (
            <SquareUserRound size={200} strokeWidth={1} />
          ) : (
            <Image
              width={350}
              height={350}
              alt={"Profile Image"}
              className="h-[350px] w-[270px] rounded-xl object-cover"
              src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}${user?.profileImgUrl}`}
            />
          )}

          <Link href={"/participants"} className="w-full">
            <Button className="h-14 w-full rounded-xl bg-[#35246F] text-base font-semibold transition duration-200 hover:bg-[#35246F]">
              TODOS OS PARTICIPANTES
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Card className="flex h-[350px] w-[390px] flex-col items-start gap-3 bg-[#F3F3F3]">
            <div className="flex h-[300px] flex-col gap-6 p-4">
              <h1 className="text-3xl font-bold">{user?.name}</h1>

              <div className="text-justify text-sm font-medium md:text-base">
                {user?.description ? (
                  user?.description
                ) : (
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea.
                  </div>
                )}
              </div>
            </div>
          </Card>

          <div className="flex h-14 w-[390px] items-center rounded-xl border-[3px] border-black px-4 text-lg font-semibold">
            Grupo de Interesse: {interests}
          </div>
        </div>
      </div>
    </div>
  );
}
