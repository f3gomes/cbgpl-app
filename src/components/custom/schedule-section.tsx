import { SlidersHorizontal } from "lucide-react";

import { schedule } from "../data/list";
import WorkshopCard from "./workshop-card";

interface ScheduleSectionProps {
  schedule: typeof schedule;
}

export default function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section className="flex h-full w-full flex-row justify-center rounded-3xl bg-white xl:min-w-[700px] xl:max-w-[700px]">
      <div className="relative z-10 flex h-full flex-row flex-wrap justify-center gap-2">
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
                    <span className="font-semibold">
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
  );
}
