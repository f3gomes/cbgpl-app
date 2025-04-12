"use client";

import AsideLeft from "@/components/custom/aside-left";
import AsideRight from "@/components/custom/aside-right";
import Header from "@/components/custom/header";
import ScheduleSection from "@/components/custom/schedule-section";
import {
  sessionsDayOne,
  sessionsDayTwo,
  sideIcons,
  socialIcons,
} from "@/data/list";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Schedule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    <ScheduleSection key="day1" date="22 de abril" sessions={sessionsDayOne} />,
    <ScheduleSection key="day2" date="23 de abril" sessions={sessionsDayTwo} />,
  ];

  const showPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const showNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <Header />

      <main className="mx-auto flex w-full flex-grow flex-col justify-center gap-2 p-4 xl:flex-row xl:items-start">
        <AsideLeft sideIcons={sideIcons} socialIcons={socialIcons} />

        <section className="relative flex h-full w-full flex-col justify-start rounded-3xl bg-white shadow-md md:flex-row xl:min-w-[700px] xl:max-w-[700px]">
          <div className="flex w-full items-center justify-between px-4 py-2 md:hidden">
            <button
              onClick={showPrev}
              disabled={currentIndex === 0}
              className="text-gray-600 disabled:opacity-30"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <button
              onClick={showNext}
              disabled={currentIndex === sections.length - 1}
              className="text-gray-600 disabled:opacity-30"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>

          <div className="w-full md:flex">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-300 ${index === currentIndex ? "block" : "hidden"
                  } md:block`}
              >
                {section}
              </div>
            ))}
          </div>
        </section>

        <AsideRight />
      </main>
    </div>
  );
}
