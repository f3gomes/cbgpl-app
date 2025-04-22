"use client";

import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { CircleUserRound, HelpCircle, LogOut, User } from "lucide-react";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ProfileModal from "./profile-modal";
import HelpModal from "./help-modal";

interface UserMenuProps {
  name: string | null;
  email: string;
  imgPath: string;
}

const UserMenu = ({ name, email, imgPath }: UserMenuProps) => {
  const router = useRouter();

  const [profileImg, setProfileImg] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("gtxp-user");
    }

    Cookies.remove("gtxp");
    router.push("/sign-in");
  };

  useEffect(() => {
    if (imgPath) {
      const path = imgPath;
      const baseUrl = `${process.env.NEXT_PUBLIC_URL_ENDPOINT}/tr:w-150,h-150,fo-face`;
      setProfileImg(`${baseUrl}${path}`);
    }
  }, [imgPath]);

  return (
    <Menubar className="flex h-10 w-10 justify-center rounded-full border-0">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer p-0">
          <Avatar className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
            <AvatarImage src={profileImg} alt="User avatar" />
            <CircleUserRound size={24} className="text-[#FFFFFF]" />
          </Avatar>
        </MenubarTrigger>

        <MenubarContent className="mr-8 min-w-[200px]">
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-gray-500">{email}</span>
            </div>
          </div>

          <MenubarSeparator />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <MenubarItem
                onSelect={(e) => e.preventDefault()}
                className="flex cursor-pointer items-center gap-2"
              >
                <User className="h-4 w-4" />
                <span>Perfil</span>
              </MenubarItem>
            </DialogTrigger>
            <ProfileModal setOpen={setOpen} />
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <MenubarItem
                onSelect={(e) => e.preventDefault()}
                className="flex cursor-pointer items-center gap-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Ajuda</span>
              </MenubarItem>
            </DialogTrigger>
            <HelpModal />
          </Dialog>

          <MenubarSeparator />

          <MenubarItem
            className="flex cursor-pointer items-center gap-2 text-red-600"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default UserMenu;
