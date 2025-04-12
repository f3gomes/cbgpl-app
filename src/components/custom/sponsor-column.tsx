"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SponsorProps {
  folder: string;
  min: number;
  max: number;
}

export default function SponsorColumn({ folder, min, max }: SponsorProps) {
  const [index, setIndex] = useState(min);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev < max ? prev + 1 : min));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="flex flex-col items-center">
      <Image
        width={250}
        height={330}
        src={`/assets/patrocinio/${folder}/${index}.png`}
        alt="Banner"
        className="w-[400px] object-contain xl:w-[300px]"
      />
      <hr className="my-4 w-full border-gray-300" />
    </div>
  );
}
