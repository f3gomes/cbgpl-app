"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  CircleUserRound,
} from "lucide-react";

interface UserMenuProps {
  name: string | null;
  email: string;
  profileImgUrl: string;
}

const UserMenu = ({ name, email, profileImgUrl }: UserMenuProps) => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Menubar className="flex h-10 w-10 justify-center rounded-full border-0">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer p-0">
          <Avatar className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600">
            <AvatarImage src={profileImgUrl} alt="User avatar" />
            <CircleUserRound size={20} className="text-[#FFFFFF]" />
          </Avatar>
        </MenubarTrigger>

        <MenubarContent className="mr-2 min-w-[200px]">
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/api/placeholder/40/40" alt="User avatar" />
              <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-gray-500">{email}</span>
            </div>
          </div>

          <MenubarSeparator />

          <MenubarItem className="flex cursor-pointer items-center gap-2">
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </MenubarItem>

          <MenubarItem className="flex cursor-pointer items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Configurações</span>
          </MenubarItem>

          <MenubarItem className="flex cursor-pointer items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>Ajuda</span>
          </MenubarItem>

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
