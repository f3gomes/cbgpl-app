"use client";

import { listUsers } from "@/actions/listUsers";
import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ParticipantsList from "@/components/custom/participants-list";

import { sideIcons, socialIcons } from "@/components/data/list";
import { useEffect, useState } from "react";

export default function ParticipantsPage() {
  const [participantsList, setParticipantsList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const list: any = await listUsers();
      setParticipantsList(list?.data?.updatedList);
    };

    fetchList();
  }, []);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row xl:items-start">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <ParticipantsList participants={participantsList} />

          <AsideRight />
        </main>
      </div>
    </>
  );
}
