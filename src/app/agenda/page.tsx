import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/custom/header";
import WorkshopCard from "@/components/custom/workshop-card";
import { schedule, sideIcons, socialIcons } from "@/components/data/list";

export default function Agenda() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-4 p-4 xl:flex-row">
        <aside className="flex h-12 w-full flex-col items-center rounded-2xl px-4 shadow-md xl:h-[600px] xl:w-[330px] xl:p-4 xl:px-0">
          <div className="mt-2 flex w-full justify-between xl:mt-0">
            {socialIcons.map((Item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="[&_svg]:h-6 [&_svg]:w-6"
              >
                <Item size={64} className="text-[#35246F]" />
              </Button>
            ))}
          </div>

          <div className="hidden xl:block">
            {sideIcons.map((Item, index) => (
              <div key={index}>
                <hr className="my-2 border-gray-300" />
                <Button
                  variant="ghost"
                  className="flex w-full items-center justify-start gap-3 [&_svg]:h-6 [&_svg]:w-6"
                >
                  <Item.icons size={40} className="text-[#35246F]" />
                  <span className="font-inter text-lg">{Item.title}</span>
                </Button>
              </div>
            ))}
          </div>
        </aside>

        <section className="flex h-full flex-row">
          <div className="relative z-10 flex h-full flex-row gap-4">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="relative w-[345px] rounded-[27px] bg-white py-4 pl-3 shadow-md"
              >
                <div className="mb-4 flex items-center justify-between pr-3">
                  <div className="mx-auto mr-auto flex h-[39px] w-[180px] items-center justify-center rounded-[18px] bg-orange-500 px-4">
                    <h2 className="text-center font-sans text-xl font-extrabold uppercase leading-6 tracking-wider text-white">
                      {day.date}
                    </h2>
                  </div>

                  <button className="cursor-pointer">
                    <SlidersHorizontal className="text-[#35246F]" size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {day.sessions.map((session, idx) => (
                    <div
                      key={idx}
                      className="flex h-[240px] w-[325px] flex-col overflow-hidden rounded-[27px] bg-[#35246F] shadow-md"
                    >
                      <div className="px-4 pt-3 text-center text-white">
                        <span className="font-inter">
                          {session.type} | {session.time}
                        </span>
                      </div>

                      <WorkshopCard session={session} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="h-[600px] w-[330px] rounded-2xl bg-white p-4 shadow-md">
          <hr className="my-4 border-gray-300" />
          <div className="mb-4 flex items-center gap-2 font-semibold text-gray-400">
            <span>Patrocinado</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
