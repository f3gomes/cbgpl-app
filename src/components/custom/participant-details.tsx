"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";
import { getUserById } from "@/actions/getUserById";
import { Instagram, Linkedin, SquareUserRound, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

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

  const socialLinks = [
    {
      name: "Linkedin",
      icon: Linkedin,
      url: (user: any) => user?.linkedin || "https://www.linkedin.com/in/",
      hoverClass: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: (user: any) => user?.twitter || "https://x.com/?lang=pt",
      hoverClass: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: (user: any) => user?.instagram || "https://instagram.com",
      hoverClass: "hover:text-pink-500",
    },
  ];

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
            <div className="flex h-full w-full flex-col gap-6 p-4">
              <h1 className="text-3xl font-bold">{user?.name}</h1>

              <div className="h-full w-full text-justify text-sm font-medium md:text-base">
                <div className="flex h-full w-full flex-col space-y-4 rounded-xl bg-gray-900 p-4 shadow-lg">
                  {user?.description
                    ? user?.description
                    : socialLinks.map(
                      ({ name, icon: Icon, url, hoverClass }) => (
                        <Link
                          key={name}
                          target="_blank"
                          href={url(user)}
                          className={cn(
                            hoverClass,
                            "flex items-center space-x-3 text-white",
                          )}
                        >
                          <Icon size={24} />
                          <span>{name}</span>
                        </Link>
                      ),
                    )}
                </div>
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
