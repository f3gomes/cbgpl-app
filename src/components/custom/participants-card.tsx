import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export interface ParticipantCardProps {
  name: string;
  role: string;
  activities: string;
  image: string;
}

export default function ParticipantCard({
  name,
  role,
  activities,
  image,
}: ParticipantCardProps) {
  return (
    <>
      <Card className="flex h-[120px] w-[310px] items-center justify-center rounded-[21px] bg-[#F3F3F3] p-2">
        <div className="items-center justify-center">
          <Image
            alt="Imagem de Perfil"
            src={image}
            height={200}
            width={200}
            className="h-[100px] w-[100px] rounded-full object-cover"
          />
        </div>
        <CardContent className="ml-[10px] flex h-[100px] w-[200px] flex-col items-start justify-center gap-1 rounded-[15px] bg-white p-2 text-left text-sm">
          <span className="text-base font-bold">{name}</span>
          <span className="text-sm">{role}</span>
          <span>{activities}</span>
        </CardContent>
      </Card>
    </>
  );
}
