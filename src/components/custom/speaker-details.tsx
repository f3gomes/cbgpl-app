"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LinkedinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getSpeakerById } from "@/actions/getSpeakerById";

interface SpeakerDetailsProps {
  id: string;
}

export default function SpeakerDetails({ id }: SpeakerDetailsProps) {
  const [speaker, setSpeaker] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        const data: any = await getSpeakerById(id);

        if (data?.response?.data?.message) {
          console.log(data?.response?.data?.message);
        }

        if (data?.data?.speaker) {
          setSpeaker(data?.data?.speaker);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpeaker();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex min-h-[600px] w-full flex-col items-center justify-center gap-1 rounded-3xl bg-white shadow-md xl:h-[600px] xl:min-w-[700px] xl:max-w-[700px]">
        <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-[#35246F]"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[600px] w-full flex-col gap-1 rounded-3xl bg-white shadow-md xl:min-h-[600px] xl:min-w-[700px] xl:max-w-[700px]">
      <div className="flex flex-col gap-3 p-4 sm:flex-row">
        <div className="flex min-w-[270px] flex-col items-center gap-4">
          <Image
            width={350}
            height={350}
            src={speaker?.profileImgUrl}
            alt={speaker?.profileImgUrl}
            className="h-[350px] w-[270px] rounded-xl object-cover"
          />

          <Link href={"/speakers"} className="w-full">
            <Button className="h-12 w-full bg-[#35246F] transition duration-200 hover:bg-[#35246F]">
              Todos os speakers
            </Button>
          </Link>
        </div>

        <div className="bg-blue-gray-50 relative flex w-full flex-col gap-2 rounded-xl bg-[#F3F3F3] p-3">
          <Link
            href={speaker?.linkedin}
            target="_blank"
            className="absolute right-2 top-2"
          >
            <Button>
              <LinkedinIcon size={22} />
            </Button>
          </Link>

          <h1 className="text-3xl font-bold lg:text-xl">{speaker?.name}</h1>

          <div className="text-justify text-sm md:text-base">
            {speaker?.role}
          </div>

          <div className="mt-12 text-justify text-sm font-medium md:text-base">
            {speaker?.description}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="font-bold">Tema da Palestra:</h1>

        <div className="text-justify">{speaker?.speech}</div>
      </div>
    </div>
  );
}
