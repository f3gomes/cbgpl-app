"use client";

import Spinner from "./spinner";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { updateUser } from "@/actions/updateUser";

export default function ProfileModal() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState<any>(null);

  const fetchUser = async () => {
    if (typeof window !== "undefined") {
      const userFromStorage = await JSON.parse(
        window.localStorage.getItem("gtxp-user")!,
      );

      setUser(userFromStorage);
      setUserToUpdate({ email: userFromStorage?.email });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res: any = await updateUser(userToUpdate);

      if (res?.data?.user) {
        toast.message("Dados enviados com sucesso!", {
          description: "Suas alterações foram salvas",
          position: "top-right",
        });
        setUserToUpdate(null);
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
          <DialogTitle>Perfil</DialogTitle>
        </DialogHeader>
        <DialogDescription>{user?.description}</DialogDescription>

        <Label>Nome</Label>
        <Input
          type="text"
          value={user?.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
            setUserToUpdate({ ...userToUpdate, name: e.target.value });
          }}
        />

        <Label>Visível</Label>
        <Select
          onValueChange={(e) =>
            setUserToUpdate({ ...userToUpdate, visible: e === "true" })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true" className="select-none">
              SIM
            </SelectItem>
            <SelectItem value="false" className="select-none">
              NÃO
            </SelectItem>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="w-full bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700"
          disabled={isLoading || !userToUpdate}
        >
          {isLoading ? <Spinner /> : "Enviar"}
        </Button>
      </form>
    </DialogContent>
  );
}
