import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export interface ParticipantCardProps {
  name: string;
  role: string;
  funcao: string;
  image: string;
}

export default function ParticipantCard({
  name,
  role,
  funcao,
  image,
}: ParticipantCardProps) {
  return (
    <>
      <Card className="flex h-[120px] w-[300px] items-center justify-center rounded-[21px] bg-[#F3F3F3] p-2">
        <div className="items-center justify-center">
          <Image
            alt="Imagem de Perfil"
            src={image}
            height={200}
            width={200}
            className="h-[90px] w-[90px] shrink-0 rounded-full"
          />
        </div>
        <CardContent className="ml-[10px] flex h-[100px] w-[200px] flex-col items-start justify-center gap-1 rounded-[15px] bg-white p-2 text-left text-sm">
          <span className="font-bold">{name}</span>
          <span>{role}</span>
          <span>{funcao}</span>
        </CardContent>
      </Card>
    </>
  );
}
