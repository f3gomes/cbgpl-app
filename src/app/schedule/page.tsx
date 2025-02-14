import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ScheduleSection from "@/components/custom/schedule-section";
import { schedule, sideIcons, socialIcons } from "@/components/data/list";

export default function Schedule() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col items-center justify-center gap-2 p-4 xl:flex-row xl:items-start">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <ScheduleSection schedule={schedule} />

          <AsideRight />
        </main>
      </div>
    </>
  );
}
