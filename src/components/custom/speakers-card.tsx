import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";

export interface SpeakerCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
}

export default function SpeakerCard({ name, role, image }: SpeakerCardProps) {
  function subText(text: string) {
    const limit = 36;

    if (text.length <= limit) return text;

    const indexBefore = text.lastIndexOf(" ", limit);
    const nextSpace = text.indexOf(" ", limit);

    if (indexBefore !== -1) {
      return text.substring(0, indexBefore);
    } else if (nextSpace !== -1) {
      return text.substring(0, nextSpace);
    }

    return text.substring(0, limit);
  }

  return (
    <>
      <Card className="h-60 w-[162px] cursor-pointer">
        <CardHeader className="relative h-[156px] rounded-t-xl bg-black">
          <Image
            alt="Imagem de Perfil"
            src={image}
            height={200}
            width={200}
            className="absolute left-0 top-0 h-[156px] rounded-t-xl object-cover"
          />
        </CardHeader>
        <CardContent className="flex h-[84px] flex-col justify-center gap-1 rounded-b-xl bg-[#35246F] px-2 py-0 text-center text-sm text-white">
          <span className="font-bold">{name}</span>
          <span>{subText(role)}</span>
        </CardContent>
      </Card>
    </>
  );
}
