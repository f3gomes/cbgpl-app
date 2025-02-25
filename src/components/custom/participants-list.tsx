"use client";

import { listUsers } from "@/actions/listUsers";
import ParticipantCard from "./participants-card";
import { useEffect, useState } from "react";

// eslint-disable-next-line
export default function ParticipantsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [participantsList, setParticipantsList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      // eslint-disable-next-line
      const list: any = await listUsers();
      setParticipantsList(list?.data?.updatedList);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 rounded-xl bg-white p-4 xl:min-w-[700px] xl:max-w-[700px]">
      <div className="mt-2 h-10 w-52 rounded-full bg-[#35246F]">
        <h1 className="p-1 text-center text-2xl font-bold text-white">
          Participantes
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {!isLoading ? (
          <>
            {
              // eslint-disable-next-line
              participantsList.map((item: any, index: number) => (
                <ParticipantCard
                  key={index}
                  index={index}
                  name={item.name}
                  role={item.role}
                  activities={item.role}
                  image={item.profileImgUrl}
                />
              ))
            }
          </>
        ) : (
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-[#35246F]"></div>
        )}
      </div>
    </div>
  );
}
