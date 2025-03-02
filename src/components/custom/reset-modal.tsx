"use client";

import Spinner from "./spinner";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { requestUserPassword } from "@/actions/requestUserPass";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function ResetModal() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await requestUserPassword({ email });

      if (res?.data?.message) {
        toast.message("Dados enviados com sucesso!", {
          description: res?.data?.message as string,
          position: "top-right",
        });

        setEmail("");
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
    <DialogContent className="w-96">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <DialogHeader>
          <DialogTitle>Recuperação de senha</DialogTitle>
        </DialogHeader>
        <DialogDescription>Informe seu e-mail cadastrado:</DialogDescription>

        <Input value={email} onChange={(e) => setEmail(e.target.value)} />

        <Button
          type="submit"
          className="w-full bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
          disabled={isLoading || !email}
        >
          {isLoading ? <Spinner /> : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  );
}
