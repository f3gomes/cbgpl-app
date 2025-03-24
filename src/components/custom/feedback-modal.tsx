"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { createFeedback } from "@/actions/createFeedback";
import Spinner from "./spinner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface FeedbackProps {
  name?: string;
  email?: string;
  message?: string;
}

export default function FeedbackModal() {
  const [data, setData] = useState<FeedbackProps | null>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = async () => {
    if (typeof window !== "undefined") {
      const userFromStorage = await JSON.parse(
        window.localStorage.getItem("gtxp-user")!,
      );

      setData({ name: userFromStorage?.name, email: userFromStorage?.email });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res: any = await createFeedback(data);

      if (res?.data?.feedback) {
        toast.message("Dados enviados com sucesso!", {
          description: "Suas alterações foram salvas",
          position: "top-right",
        });

        setData(null);
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

  return (
    <DialogContent className="border-none p-0">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <DialogHeader className="w-full">
          <DialogTitle className="flex w-full items-center justify-center rounded-b-xl bg-[#35246F] p-4 text-2xl text-white shadow-xl">
            Feedback
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="text-center text-base text-black">
          <span>
            Escreva um comentário sobre o evento, palestras, organização,
            palestrantes e o que mais desejar.
          </span>
          <br />
          <strong>Queremos saber como foi sua experiência!</strong>
        </DialogDescription>

        <div className="flex flex-col items-center justify-center gap-3 p-4">
          <Input
            value={data?.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="Escreva seu comentário..."
            className="h-[100px] flex-grow rounded-xl bg-[#F3F3F3] text-center"
          />

          <Button
            type="submit"
            className="w-24 rounded-xl bg-orange-500 text-lg font-semibold text-white hover:bg-orange-600 active:bg-orange-700"
            disabled={isLoading || !data?.message}
          >
            {isLoading ? <Spinner /> : "Enviar"}
          </Button>
        </div>
      </form>
    </DialogContent>
  );
}
