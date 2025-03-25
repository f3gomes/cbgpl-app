"use client";

import Link from "next/link";
import SpeakerCard from "./speakers-card";
import { useEffect, useState } from "react";
import { listSpeakers } from "@/actions/listSpeakers";

export default function SpeakerList() {
  const [isLoading, setIsLoading] = useState(true);
  const [speakerList, setSpeakerList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const list: any = await listSpeakers();
      setSpeakerList(list?.data?.speakerList);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  return (
    <div className="flex h-full min-h-[600px] flex-col items-center justify-start gap-6 rounded-xl bg-white p-2 shadow-md xl:min-w-[700px] xl:max-w-[700px]">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Speakers
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-2">
        {isLoading ? (
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-[#35246F]"></div>
        ) : (
          speakerList.map((item: any, index: number) => (
            <Link href={`/speakers/${index}`} key={index}>
              <SpeakerCard
                name={item.name}
                role={item.role}
                image={item.profileImgUrl}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
