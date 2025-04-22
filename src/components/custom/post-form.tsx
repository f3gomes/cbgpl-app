"use client";

import { useEffect, useState } from "react";
import { CircleUserRound, Images } from "lucide-react";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { toast } from "sonner";
import { createPost } from "@/actions/createPost";
import Spinner from "./spinner";
import { uploadImage } from "@/actions/imageKitUpload";
import { fetchUser } from "@/actions/fetchUser";

interface PostForm {
  newPost: number;
  setNewPost: React.Dispatch<React.SetStateAction<number>>;
}

export default function PostForm({ setNewPost }: PostForm) {
  // eslint-disable-next-line
  const [imgUrl, setImgUrl] = useState<any>();
  const [message, setMessage] = useState("");

  const [user, setUser] = useState<any>();

  const [profileImg, setProfileImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    name: user?.name,
    email: user?.email,
  };

  const handleImageChange = (event: any) => {
    const file = event?.target?.files;

    if (!file[0]?.type.match("image/*")) {
      toast.message("Formato inválido!", {
        description: "Somente arquivos de imagens são aceitos",
        position: "top-right",
      });
    }

    if (file?.length > 0 && file[0]?.type?.match("image/*")) {
      const path = file[0];
      const imageUrl = URL.createObjectURL(file[0]);

      setImgUrl({ path, imageUrl });
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email } = defaultValues;
    let image = null;

    try {
      setIsLoading(true);

      if (imgUrl) {
        image = await uploadImage(imgUrl?.path);
      }

      const data = { name, email, message, imgUrl: image?.filePath };

      const res: any = await createPost(data);

      if (res?.data?.post) {
        toast.message("Mensagem enviada com sucesso!", {
          description: res?.data?.message as string,
          position: "top-right",
        });

        setMessage("");
        setImgUrl("");
        setNewPost((prev) => prev + 1);
      }

      if (res?.response?.data?.error) {
        toast.error("Erro ao enviar dados!", {
          description: res?.response?.data?.error as string,
          position: "top-right",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(setUser);
  }, []);

  useEffect(() => {
    if (user) {
      const path = user?.profileImgUrl;
      const baseUrl = `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face`;
      setProfileImg(`${baseUrl}${path}`);
    }
  }, [user]);

  return (
    <Card className="h-[160px] w-full rounded-2xl p-4 shadow-md">
      <form onSubmit={onSubmit}>
        <div className="mt-1 flex items-center gap-4">
          <div className="flex h-[72px] min-w-[72px] items-center justify-center rounded-full bg-[#F3F3F3]">
            <Avatar className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
              <AvatarImage src={profileImg} alt="User avatar" />
              <CircleUserRound size={36} className="text-[#FFFFFF]" />
            </Avatar>
          </div>

          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Compartilhe uma publicação"
            className="h-[72px] flex-grow rounded-3xl bg-[#F3F3F3] sm:w-[537px]"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            className="relative cursor-default [&_svg]:h-6 [&_svg]:w-6"
          >
            <div className="flex items-center gap-2">
              <Input
                id="file"
                name="file"
                type="file"
                className="absolute left-0 h-9 w-full opacity-0"
                onChange={handleImageChange}
              />
              <Images size={16} className="text-[#35246F]" />
              {imgUrl ? <span>{imgUrl?.path?.name}</span> : <span>Mídia</span>}
            </div>
          </Button>

          <Button
            type="submit"
            variant="outline"
            disabled={isLoading || !message}
            className="w-[100px] bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover [&_svg]:h-6 [&_svg]:w-6"
          >
            <span className="text-slate-100">
              {isLoading ? <Spinner /> : "Enviar"}
            </span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
