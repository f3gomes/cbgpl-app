import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import Link from "next/link";

export interface ParticipantCardProps {
  index?: number;
  name: string;
  role: string;
  image: string;
  activities: string;
}

export default function ParticipantCard({
  index,
  name,
  role,
  image,
  activities,
}: ParticipantCardProps) {
  const [error, setError] = useState(false);

  return (
    <>
      <Link href={`/participants/${index}`}>
        <Card className="flex h-[120px] w-[310px] items-center justify-center gap-2 rounded-[21px] bg-[#F3F3F3] p-2">
          <div className="items-center justify-center">
            {!error ? (
              <Image
                width={200}
                height={200}
                alt="Imagem de Perfil"
                onError={() => setError(true)}
                className="h-[100px] w-[100px] rounded-full object-cover"
                src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face${image}`}
              />
            ) : (
              <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-slate-200 text-xs text-gray-500">
                Sem Foto
              </span>
            )}
          </div>

          <CardContent className="flex h-[100px] w-[200px] flex-col items-start justify-center gap-1 rounded-[15px] bg-white p-2 text-left text-sm">
            <span className="text-base font-bold">{name}</span>
            <span className="text-sm">{role}</span>
            <span>{activities}</span>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
