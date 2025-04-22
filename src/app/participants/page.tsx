import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ParticipantsList from "@/components/custom/participants-list";

import { sideIcons, socialIcons } from "@/data/list";

export default function ParticipantsPage() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-col justify-center gap-2 p-4 xl:flex-row xl:items-start">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <ParticipantsList />

          <AsideRight />
        </main>
      </div>
    </>
  );
}
