import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ScheduleSection from "@/components/custom/schedule-section";
import {
  sessionsDayOne,
  sessionsDayTwo,
  sideIcons,
  socialIcons,
} from "@/components/data/list";

export default function Schedule() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-gray-50">
        <Header />

        <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row xl:items-start">
          <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

          <section className="flex h-full w-full flex-col justify-center rounded-3xl bg-white shadow-md md:flex-row xl:min-w-[700px] xl:max-w-[700px]">
            <ScheduleSection date="22 de abril" sessions={sessionsDayOne} />
            <ScheduleSection date="23 de abril" sessions={sessionsDayTwo} />
          </section>

          <AsideRight />
        </main>
      </div>
    </>
  );
}
