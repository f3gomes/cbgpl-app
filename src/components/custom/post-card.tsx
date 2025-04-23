"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

interface PostCardProps {
  name: string;
  message: string;
  imgUrl?: string;
  profileImg?: string;
  createdAt: Date;
}

const PostCard: React.FC<PostCardProps> = ({
  name,
  imgUrl,
  message,
  createdAt,
  profileImg,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!imgUrl || imgUrl === "" || imgUrl === undefined) {
      setIsLoading(false);
    }
  }, [imgUrl]);

  return (
    <Card className="w-full space-y-4 rounded-2xl p-4 shadow-md">
      <div className="flex items-center space-x-3">
        <Avatar className="bg-slate-300">
          {profileImg ? (
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face${profileImg}`}
              alt={name}
            />
          ) : (
            <Avatar className="h-10 w-10">
              <AvatarFallback className="font-bold">
                {name?.substring(0, 1)}
              </AvatarFallback>
            </Avatar>
          )}
        </Avatar>
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-500">
            {format(new Date(createdAt), "dd/MM/yyyy HH:mm")}
          </p>
        </div>
      </div>

      <div className="w-fit">
        {isLoading ? (
          <div className="flex h-16 w-16 justify-center">
            <Spinner />
          </div>
        ) : (
          <></>
        )}

        {imgUrl && (
          <Image
            width={800}
            height={800}
            alt="Imagem da publicação"
            src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/${imgUrl}`}
            className="h-auto w-full border object-cover"
            onLoad={() => {
              setIsLoading(false);
            }}
          />
        )}
      </div>

      <p className="text-sm text-gray-700">{message}</p>
    </Card>
  );
};

export default PostCard;
