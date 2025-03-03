"use client";

import { useEffect, useState } from "react";
import { CircleUserRound, Images } from "lucide-react";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { toast } from "sonner";
import { createPost } from "@/actions/createPost";

export default function PostForm() {
  // eslint-disable-next-line
  const [imgUrl, setImgUrl] = useState<any>();
  const [message, setMessage] = useState("");

  const [user, setUser] = useState<any>();

  const [profileImg, setProfileImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    name: user?.name,
    email: user?.email,
    message: "",
    imgUrl: "",
  };

  const fetchUser = async () => {
    if (typeof window !== "undefined") {
      const userFromStorage = await JSON.parse(
        window.localStorage.getItem("gtxp-user")!,
      );
      setUser(userFromStorage);
    }
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
    const { name, email, message, imgUrl } = defaultValues;

    try {
      setIsLoading(true);
      const res: any = await createPost({ name, email, message, imgUrl });
      console.log(res);

      if (res?.data?.post) {
        toast.message("Mensagem enviada com sucesso!", {
          description: res?.data?.message as string,
          position: "top-right",
        });

        setMessage("");
        setImgUrl("");
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
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      const path = user?.profileImgUrl;
      const baseUrl = `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face`;
      setProfileImg(`${baseUrl}/${path}`);
    }
  }, [user]);

  return (
    <Card className="h-[160px] w-full rounded-2xl p-4 shadow-md">
      <form onSubmit={onSubmit}>
        <div className="mt-1 flex items-center gap-4">
          <div className="flex h-[72px] min-w-[72px] items-center justify-center rounded-full bg-[#F3F3F3]">
            <Avatar className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
              <AvatarImage src={profileImg} alt="User avatar" />
              <CircleUserRound size={20} className="text-[#FFFFFF]" />
            </Avatar>
          </div>

          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Compartilhe uma publicação"
            className="h-[72px] w-[537px] flex-grow rounded-3xl bg-[#F3F3F3]"
          />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            className="[&_svg]:h-6 [&_svg]:w-6"
          >
            <Input
              id="file"
              name="file"
              type="file"
              className="absolute h-9 w-[100px] opacity-0"
              onChange={handleImageChange}
            />
            <Images size={16} className="text-[#35246F]" />
            <span>Mídia</span>
          </Button>

          <Button
            type="submit"
            variant="outline"
            disabled={isLoading || !message}
            className="bg-cbgpl-tangerine hover:bg-cbgpl-tangerine-hover [&_svg]:h-6 [&_svg]:w-6"
          >
            <span className="text-slate-100">Publicar</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
